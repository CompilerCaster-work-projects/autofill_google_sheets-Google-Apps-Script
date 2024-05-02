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




