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