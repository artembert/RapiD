// Returns a single object containing the tags of all the given entities.
// Example:
// {
//   highway: 'service',
//   service: 'parking_aisle'
// }
//           +
// {
//   highway: 'service',
//   service: 'driveway',
//   width: '3'
// }
//           =
// {
//   highway: 'service',
//   service: [ 'driveway', 'parking_aisle' ],
//   width: [ '3', undefined ]
// }
type CombinedTags = Record<string, (string | undefined)[] | string | number | boolean>


export function getCombinedTags(entityIDs, graph: CoreGraph): CombinedTags {
    var tags = {};
    var tagCounts = {};
    var allKeys = new Set();

    var entities = entityIDs.map(function(entityID) {
        return graph.hasEntity(entityID);
    }).filter(Boolean);

    // gather the aggregate keys
    entities.forEach(function(entity) {
        var keys = Object.keys(entity.tags).filter(Boolean);
        keys.forEach(function(key) {
            allKeys.add(key);
        });
    });

    entities.forEach(function(entity) {

        allKeys.forEach(function(key: string) {

            var value = entity.tags[key]; // purposely allow `undefined`

            if (!tags.hasOwnProperty(key)) {
                // first value, set as raw
                tags[key] = value;
            } else {
                if (!Array.isArray(tags[key])) {
                    if (tags[key] !== value) {
                        // first alternate value, replace single value with array
                        tags[key] = [tags[key], value];
                    }
                } else { // type is array
                    if (tags[key].indexOf(value) === -1) {
                        // subsequent alternate value, add to array
                        tags[key].push(value);
                    }
                }
            }

            var tagHash = key + '=' + value;
            if (!tagCounts[tagHash]) tagCounts[tagHash] = 0;
            tagCounts[tagHash] += 1;
        });
    });

    for (var key in tags) {
        if (!Array.isArray(tags[key])) continue;

        // sort values by frequency then alphabetically
        tags[key] = tags[key].sort(function(val1, val2) {
            var key = key; // capture
            var count2 = tagCounts[key + '=' + val2];
            var count1 = tagCounts[key + '=' + val1];
            if (count2 !== count1) {
                return count2 - count1;
            }
            if (val2 && val1) {
                return val1.localeCompare(val2);
            }
            return val1 ? 1 : -1;
        });
    }

    return tags;
}
