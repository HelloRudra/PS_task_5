# Problem 1


Given an array nums containing n distinct numbers taken from the range [0, n], return the only number in the range that is missing from the array.
Examples
missingNumber([3, 0, 1]);
=> 2
missingNumber([0, 1]);
=> 2
Example 1
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers. The range is [0, 3]. 2 is missing.
Example 2
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers. The range is [0, 2]. 2 is missing.






# Problem 2

Given an array of student attendance records, generate a formatted report string for each student.
Each student record is an object with the following properties:

name (string): The student's name.
present (number): The number of sessions attended.
total (number): The total number of sessions.
For each student:

Calculate their attendance percentage rounded to the nearest integer using Math.round((present / total) * 100).
Determine their status based on this rounded percentage:
90% and above: "Excellent"
75% through 89%: "Good"
Below 75%: "At Risk"
Format the result as "<name>: <present>/<total> (<percentage>%) - <status>".
Return an array of these formatted strings in the same order as the input.

Examples
formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]);
// ["Rafi: 18/20 (90%) - Excellent"]

formatAttendanceReport([
  { name: "Lina", present: 15, total: 20 },
  { name: "Sam", present: 12, total: 20 }
]);
// ["Lina: 15/20 (75%) - Good", "Sam: 12/20 (60%) - At Risk"]




# Problem 3

When building user interfaces, we often have to deal with incomplete or nested data.
Write a function generateProfileCard that takes a user object and returns a formatted profile string in the following format:
"{name} | {city} | followers: {followers}"

Fallback Rules
If certain fields are missing (null or undefined), use these fallbacks:

name: defaults to "Anonymous"
address.city: defaults to "Unknown"
social.followers: defaults to 0
Important: Empty strings "" and the number 0 are valid values and must not be replaced by fallbacks. Use optional chaining (?.) and the nullish coalescing operator (??) to handle this safely.

Examples
generateProfileCard({
  name: "Rafi",
  address: { city: "Dhaka" },
  social: { followers: 0 }
});
// Returns: "Rafi | Dhaka | followers: 0"

generateProfileCard({
  name: "Alice",
  social: { followers: 120 }
});
// Returns: "Alice | Unknown | followers: 120"



# Problem 4
When building user interfaces, you often need to paginate a list of items. Given the total number of items, the page size, and the current active page, calculate the metadata needed to render the pagination controls.

Write a function getPageMetadata that accepts:

totalItems (non-negative integer): The total number of items in the collection.
pageSize (positive integer): The maximum number of items displayed per page.
currentPage (positive integer): The current 1-based page number.
It should return an object containing:

totalPages: The total number of pages (0 if there are no items).
startItem: The 1-based index of the first item on the current page (0 if there are no items).
endItem: The 1-based index of the last item on the current page (0 if there are no items).
hasPrev: A boolean indicating if there is a previous page.
hasNext: A boolean indicating if there is a next page.
Note: You can assume currentPage will always be a valid page number from 1 to totalPages (unless totalItems is 0, in which case currentPage will be 1).

Examples
Example 1:

Input: totalItems = 95, pageSize = 10, currentPage = 10
Output: { totalPages: 10, startItem: 91, endItem: 95, hasPrev: true, hasNext: false }
Explanation: Page 10 is the last page, starting at item 91 and ending at the last item (95).
Example 2:

Input: totalItems = 24, pageSize = 5, currentPage = 3
Output: { totalPages: 5, startItem: 11, endItem: 15, hasPrev: true, hasNext: true }
Explanation: Page 3 contains items 11 through 15. There are pages before (1, 2) and after (4, 5).


# Problem 5
Given an array of daily rainfall measurements, find all the "peak" days.

A day is considered a peak if its rainfall is strictly higher than both its immediate left (previous day) and right (next day) neighbors.

Because the first and last days do not have both neighbors, they can never be peaks.

Return an array of the 1-based day numbers (i.e., the first day is day 1, the second is day 2, etc.) that are peaks, in chronological order.

Examples
findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]) should return [2, 5] because:

Day 2 (value 5) is strictly greater than Day 1 (2) and Day 3 (3).
Day 5 (value 7) is strictly greater than Day 4 (3) and Day 6 (4).
Day 8 (value 6) only has a left neighbor, so it cannot be a peak.
findRainfallPeaks([1, 2, 3, 2, 1]) should return [3] because Day 3 (value 3) is strictly greater than Day 2 (2) and Day 4 (2).

# Problem 6

Write a function that takes a year, month, and day as numbers and returns the name of the weekday for that date.

Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).

Examples
getDayOfWeek(2024, 5, 11); // "Saturday"
getDayOfWeek(2023, 1, 1);   // "Sunday"
Example 1
Input: year = 2024, month = 5, day = 11

Output: "Saturday"

Explanation: May 11, 2024 was a Saturday.

Example 2
Input: year = 2023, month = 1, day = 1

Output: "Sunday"

Explanation: January 1, 2023 was a Sunday.


# Problem 7
Given two arrays of candidate skill names, find all skills shared by both candidates.

The comparison must be case-insensitive. The returned array must:

Contain each shared skill converted to lowercase.
Contain no duplicate values.
Be sorted alphabetically in ascending order.
Examples
commonSkills(["JS", "React", "Node"], ["react", "css", "js"]);
// Returns: ["js", "react"]
commonSkills(["Python", "SQL"], ["Java", "C++"]);
// Returns: []
Example 1
Input: skills1 = ["JS","React","Node"], skills2 = ["react","css","js"]

Output: ["js","react"]

Explanation: Matching skills are "js" and "react", returned in alphabetical order.

Example 2
Input: skills1 = ["Python","SQL"], skills2 = ["Java","C++"]

Output: []

Explanation: No common skills exist.


# Problem 8

Write a function that takes an object and returns a new object where the keys and values are swapped.

If multiple keys in the original object share the same value, the key that appears later in the object's property order should overwrite any previous ones ("later key wins").

Note: In JavaScript, object keys are always strings. Therefore, the values in the returned object (which were the keys of the input object) should be strings.

Examples
swapKeysAndValues({ a: "x", b: "y" });
// => { x: "a", y: "b" }

swapKeysAndValues({ a: "x", b: "x" });
// => { x: "b" }
Example 1
Input: obj = {"a":"x","b":"y"}

Output: {"x":"a","y":"b"}

Explanation: Simple swap with unique values.

Example 2
Input: obj = {"a":"x","b":"x"}

Output: {"x":"b"}

Explanation: Both keys 'a' and 'b' map to 'x'. Since 'b' is processed later, it overwrites 'a'.


# Problem 9
You are given an array of student objects, each with a name (string) and marks (number). Your task is to group these students into different grade bands based on their marks.

The grade bands are defined as follows:

A: Marks 80 or above
B: Marks between 70 and 79 (inclusive)
C: Marks between 60 and 69 (inclusive)
F: Marks below 60
The function should return an object where the keys are the grade bands ('A', 'B', 'C', 'F') and the values are arrays of student objects belonging to that band. If a band has no students, its array should be empty.

Examples
// Example 1
const students1 = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
  { name: "David", marks: 91 }
];
// Should return:
// {
//   A: [{ name: "Alice", marks: 85 }, { name: "David", marks: 91 }],
//   B: [{ name: "Bob", marks: 72 }],
//   C: [],
//   F: [{ name: "Charlie", marks: 58 }]
// }

// Example 2
const students2 = [
  { name: "Eve", marks: 65 },
  { name: "Frank", marks: 60 }
];
// Should return:
// {
//   A: [],
//   B: [],
//   C: [{ name: "Eve", marks: 65 }, { name: "Frank", marks: 60 }],
//   F: []
// }
Example 1
Input: students = [{"marks":85,"name":"Alice"},{"marks":72,"name":"Bob"},{"marks":58,"name":"Charlie"},{"marks":91,"name":"David"}]

Output: {"A":[{"marks":85,"name":"Alice"},{"marks":91,"name":"David"}],"B":[{"marks":72,"name":"Bob"}],"C":[],"F":[{"marks":58,"name":"Charlie"}]}

Example 2
Input: students = [{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}]

Output: {"A":[],"B":[],"C":[{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}],"F":[]}


# problem 10
Simulate a customer service ticket line based on a list of event commands. Your function should process the commands in order and return an object with two arrays: queue (the people still waiting, in order from front to back) and served (the people who were served, in the order they were served).

The possible commands are:

"join <name>": Adds <name> to the back of the queue. If someone with that name is already in the queue, ignore the command.
"leave <name>": Removes <name> from the queue if they are currently waiting. If they are not in the queue, ignore the command.
"serve": Removes the person at the front of the queue and appends their name to served. If the queue is empty, do nothing.
Note: A person who has been served is no longer in the queue and may join again later.

Examples
Example 1
simulateTicketQueue([
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]);
// Returns: { queue: [], served: ["Rafi", "Alex"] }
Example 2
simulateTicketQueue([
  "serve",
  "join Bob",
  "join Bob",
  "leave Alice",
  "join Alice",
  "serve"
]);
// Returns: { queue: ["Alice"], served: ["Bob"] }
Example 1
Input: commands = ["join Rafi","join Sara","serve","join Alex","leave Sara","serve"]

Output: {"queue":[],"served":["Rafi","Alex"]}

Explanation: Rafi is served first. Sara leaves, leaving Alex next. Alex is served next.

Example 2
Input: commands = ["serve","join Bob","join Bob","leave Alice","join Alice","serve"]

Output: {"queue":["Alice"],"served":["Bob"]}

Explanation: Initial serve on empty queue does nothing. Duplicate join Bob is ignored. Alice is served after Bob.

Constraints
0 <= commands.length <= 1000
Each command string is either "serve", "join <name>", or "leave <name>"
Names are non-empty strings and case-sensitive

Topics