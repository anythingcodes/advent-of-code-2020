# Day 15: Rambunctious Recitation

## Part 1

You catch the airport shuttle and try to book a new flight to your vacation island. Due to the storm, all direct flights have been cancelled, but a route is available to get around the storm. You take it.

While you wait for your flight, you decide to check in with the Elves back at the North Pole. They're playing a memory game and are ever so excited to explain the rules!

In this game, the players take turns saying numbers. They begin by taking turns reading from a list of starting numbers (your puzzle input). Then, each turn consists of considering the most recently spoken number:

If that was the first time the number has been spoken, the current player says 0.
Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.
So, after the starting numbers, each turn results in that player speaking aloud either 0 (if the last number is new) or an age (if the last number is a repeat).

For example, suppose the starting numbers are 0,3,6:

- Turn 1: The 1st number spoken is a starting number, 0.
- Turn 2: The 2nd number spoken is a starting number, 3.
- Turn 3: The 3rd number spoken is a starting number, 6.
- Turn 4: Now, consider the last number spoken, 6. Since that was the first time the number had been spoken, the 4th number spoken is 0.
- Turn 5: Next, again consider the last number spoken, 0. Since it had been spoken before, the next number to speak is the difference between the turn number when it was last spoken (the previous turn, 4) and the turn number of the time it was most recently spoken before then (turn 1). Thus, the 5th number spoken is 4 - 1, 3.
- Turn 6: The last number spoken, 3 had also been spoken before, most recently on turns 5 and 2. So, the 6th number spoken is 5 - 2, 3.
- Turn 7: Since 3 was just spoken twice in a row, and the last two turns are 1 turn apart, the 7th number spoken is 1.
- Turn 8: Since 1 is new, the 8th number spoken is 0.
- Turn 9: 0 was last spoken on turns 8 and 4, so the 9th number spoken is the difference between them, 4.
- Turn 10: 4 is new, so the 10th number spoken is 0.

(The game ends when the Elves get sick of playing or dinner is ready, whichever comes first.)

Their question for you is: what will be the 2020th number spoken? In the example above, the 2020th number spoken will be 436.

Here are a few more examples:

- Given the starting numbers 1,3,2, the 2020th number spoken is 1.
- Given the starting numbers 2,1,3, the 2020th number spoken is 10.
- Given the starting numbers 1,2,3, the 2020th number spoken is 27.
- Given the starting numbers 2,3,1, the 2020th number spoken is 78.
- Given the starting numbers 3,2,1, the 2020th number spoken is 438.
- Given the starting numbers 3,1,2, the 2020th number spoken is 1836.
- Given your starting numbers, what will be the 2020th number spoken?

Your puzzle input is 15,5,1,4,7,0.

## Part Two
Impressed, the Elves issue you a challenge: determine the 30000000th number spoken. For example, given the same starting numbers as above:

- Given 0,3,6, the 30000000th number spoken is 175594.
- Given 1,3,2, the 30000000th number spoken is 2578.
- Given 2,1,3, the 30000000th number spoken is 3544142.
- Given 1,2,3, the 30000000th number spoken is 261214.
- Given 2,3,1, the 30000000th number spoken is 6895259.
- Given 3,2,1, the 30000000th number spoken is 18.
- Given 3,1,2, the 30000000th number spoken is 362.

Given your starting numbers, what will be the 30000000th number spoken?

## Part 2

The shuttle company is running a contest: one gold coin for anyone that can find the earliest timestamp such that the first bus ID departs at that time and each subsequent listed bus ID departs at that subsequent minute. (The first line in your input is no longer relevant.)

For example, suppose you have the same list of bus IDs as above:

```
7,13,x,x,59,x,31,19
```

An x in the schedule means there are no constraints on what bus IDs must depart at that time.

This means you are looking for the earliest timestamp (called t) such that:

- Bus ID 7 departs at timestamp t.
- Bus ID 13 departs one minute after timestamp t.
- There are no requirements or restrictions on departures at two or three minutes after timestamp t.
- Bus ID 59 departs four minutes after timestamp t.
- There are no requirements or restrictions on departures at five minutes after timestamp t.
- Bus ID 31 departs six minutes after timestamp t.
- Bus ID 19 departs seven minutes after timestamp t.

The only bus departures that matter are the listed bus IDs at their specific offsets from t. Those bus IDs can depart at other times, and other bus IDs can depart at those times. For example, in the list above, because bus ID 19 must depart seven minutes after the timestamp at which bus ID 7 departs, bus ID 7 will always also be departing with bus ID 19 at seven minutes after timestamp t.

In this example, the earliest timestamp at which this occurs is 1068781:

```
time     bus 7   bus 13  bus 59  bus 31  bus 19
1068773    .       .       .       .       .
1068774    D       .       .       .       .
1068775    .       .       .       .       .
1068776    .       .       .       .       .
1068777    .       .       .       .       .
1068778    .       .       .       .       .
1068779    .       .       .       .       .
1068780    .       .       .       .       .
1068781    D       .       .       .       .
1068782    .       D       .       .       .
1068783    .       .       .       .       .
1068784    .       .       .       .       .
1068785    .       .       D       .       .
1068786    .       .       .       .       .
1068787    .       .       .       D       .
1068788    D       .       .       .       D
1068789    .       .       .       .       .
1068790    .       .       .       .       .
1068791    .       .       .       .       .
1068792    .       .       .       .       .
1068793    .       .       .       .       .
1068794    .       .       .       .       .
1068795    D       D       .       .       .
1068796    .       .       .       .       .
1068797    .       .       .       .       .
```

In the above example, bus ID 7 departs at timestamp 1068788 (seven minutes after t). This is fine; the only requirement on that minute is that bus ID 19 departs then, and it does.

Here are some other examples:

- The earliest timestamp that matches the list 17,x,13,19 is 3417.
- 67,7,59,61 first occurs at timestamp 754018.
- 67,x,7,59,61 first occurs at timestamp 779210.
- 67,7,x,59,61 first occurs at timestamp 1261476.
- 1789,37,47,1889 first occurs at timestamp 1202161486.

However, with so many bus IDs in your list, surely the actual earliest timestamp will be larger than 100000000000000!

What is the earliest timestamp such that all of the listed bus IDs depart at offsets matching their positions in the list?
