# autofill_google_sheets
## Description
In this project, I automated the process of filling out a google sheets file called "Needs". Previously, it was filled in manually by my company's employees (doctors) and my automation allowed:
1. Reduce the time spent by doctors on filling out this file
2. Completely remove the mistakes made by people when filling out this file
### Learn more about the "Work Schedule" file
The work schedule of medical personnel is required in order for senior paramedics, in agreement with medical professionals, to enter information about periods of work and rest, illness, as well as information about the dismissal of medical personnel. The schedule of medical personnel is a set of sheets (in accordance with the cities), with tables, formulas and symbols located on them.
This file consists of typical blocks, one of which I will describe now. All other blocks look about the same (built according to the same type):

![image](https://github.com/CompilerCaster/autofill_google_sheets/assets/128957307/1decaf24-06a2-4e28-b7a5-45e94b3ec085)

| №  | Description                      |
|----|-----------------------------------------|
| 1  | List of medics planning to work at least one shift this month. |
| 2  | Field where the senior paramedic assigns shifts for each medic for the month (assigns the first letters of the shift names, for example "D" for day shift, "N" for night shift). |
| 3  | Simply a label. It's the same everywhere and doesn't carry any functionality. |
| 4  | Label indicating the year for which the schedule is being created. |
| 5  | Label indicating the month for which the schedule is being created. |
| 6  | Conditional designation indicating that the number of people on shift for that day is specified in this row. |
| 7  | Shift key legend |
| 8  | Number of shifts of a specific type for each day |
| 9  | Number of people who worked on this day |
| 10 | Conditional designation indicating that the names of employees who will work this month are specified in this column. |
| 11 | Simply ordinal numbers of employees. It doesn't carry any functionality. |
| 12 | Day numbers of the month |
| 13-17 | Decoding of shift key legends and counting shifts, hours, etc. |

### Learn more about the "Needs" file

Work with the demand file occurs as follows: The machine learning model predicts the number of inspections on a given day (I have nothing to do with this model). We also know, thanks to the work schedule, information about employees. Next, forecast information about the number of inspections and information about how many people will work in each hour are inserted into a typical block of the file and we get the result in the form of knowing whether we have enough people working at this hour, or whether it is worth revising the shifts in the schedule so that there are enough people everywhere.

![изображение](https://github.com/CompilerCaster/autofill_google_sheets/assets/128957307/5ac4cd13-d344-4310-9db1-ab9174edeb8e)

| №  | Description                                          |
|----|--------------------------------------------------------------|
| 1  | Part that has been automated in this project                 |
| 2  | City names                                                    |
| 3  | Shift names. Shifts always look the same. In this example, on January 1, 2023, in Tver, during the "Day 1" shift, people work from 8 AM to 11 AM, then take a break for 1 hour, and then work from 12 PM to 8 PM. And in this way (time-wise), this shift in this city always looks the same, from month to month and from day to day. |
| 4  | Result row. Here it is indicated whether there are enough people working at this hour |
| 5  | Name of the hour of the day                                   |
| 6  | Date and day of the week                                      |

### How to fill out the "Requirements" file using the "Work Schedule" file
Let's say we want to fill out the "Needs" in Tver on September 3, 2023.
1. Let’s see that in Tver on September 3, 4 people will work during the day and 4 people at night (different people always work day and night, this is the rule);
2. Then, knowing what each shift looks like in terms of time requirements, we indicate that during the day the first person will work according to the “Day 1” scheme, the second person according to the “Day 2” scheme
The third will work according to the “Day 3” scheme, and the fourth will again work according to the “Day 1” scheme. And this happens all the time. The fifth person would work on Day 2, the sixth person would work on Day 3, and so on;






