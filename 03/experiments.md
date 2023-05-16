# Experiments

# Testing Domain Space

Experiments are defined by test cases according to the following attributes:

- Workload
- Test duration period
- Environment


## Workload

Number of patients 1.000, 2.000, ..., 10.000, ..., 15.000 


Constant incoming velocity fps are in the following table


|T        |file | 1K  | 2K  | 3K  | 4K  | 5K  | 6K  | 7K  | 8K  | 9K  | 10K | 11K | 12K | 13K | 14K | 15K |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| T1      | 10s | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000| 1100| 1200| 1300| 1400| 1500|
| T2      | 15s | 67  | 134 | 200 | 267 | 334 | 400 | 467 | 534 | 600 | 667 | 734 | 800 | 867 | 934 | 1000|
| T3      | 30s | 34  | 67  | 100 | 134 | 167 | 200 | 234 | 267 | 300 | 334 | 367 | 400 | 434 | 467 | 500 |
| T4      | 1m  | 17  | 34  | 50  | 67  | 84  | 100 | 117 | 134 | 150 | 167 | 184 | 200 | 217 | 234 | 250 |
| T5      | 2m  | 9   | 17  | 23  | 34  | 42  | 50  | 59  | 67  | 75  | 84  | 92  | 100 | 108 | 117 | 125 |
| T6      | 30m | 2.4 | 4.8 | 7.2 | 9.6 | 12  | 14.4| 16.8| 19.2| 21.6| 24  | 26.4| 28.8| 31.2| 33.6| 36  |
| T7      | 1h  | 1.2 | 2.4 | 3.6 | 4.8 | 6   | 7.2 | 8.4 | 9.6 | 10.8| 12  | 13.2| 14.4| 15.6| 16.8| 18  |
| T8      | 2h  | 0.6 | 1.2 | 1.8 | 2.4 | 3   | 3.6 | 4.2 | 4.8 | 5.4 | 6   | 6.6 | 7.2 | 7.8 | 8.4 | 9   |


A total of 8*15=120 test cases


## Test duration period
5 min each test

## File Size

| ECG     | Size   |
|---------|--------|
| 5 sec   | 4KB    |
| 10 sec  | 8KB    |
| 15 sec  | 12KB   |
| 30 sec  | 23KB   |
| 60 sec  | 46KB   |
| 90 sec  | 69KB   |
| 120 sec | 92KB   |
| 15 min  | 0.7 MB |
| 30 min  | 1.4 MB |
| 60 min  | 2.8 MB |
| 90 min  | 4.2 MB |
| 120 min | 5.5 MB |
| 180 min | 7.9 MB |
| 240 min | 11.0 MB |


# HPC

HPC Provider - <a href="https://www.yac.hr/" target="_blank">Yotta HPC</a>


## Environment

4 different environments.

| Nodes | Patient Generator | Testing |
|-------|------------------|---------|
|   1   |       N/A        |   N/A   |
|   2   |        1         |    1    |
|   3   |        1         |    2    |
|   4   |        1         |    3    |
|   5   |        1         |    4    |


## Notes
    1.	When the best option will be selected – we will run tests for 24h and 7 days.

    2.	First try with 2 nodes – if this satisfies all requirements, no need to run the same test case on 3 or more nodes.


# Serverless
Cloud Provider - <a href="https://cloud.google.com/" target="_blank">Google Cloud</a>

## Environment

### Workflow
6 Serverless Modules (Serverless Containers - Google Cloud Run)

- InputGenerator Module  
- Preprocessing Module 
- BDC Module  
- BDC  
- Postprocessing Module  
- Finalization Module

### Testing
- On premise Apache JMeter 


## Notes
    When the best option will be selected – we will run tests for 24h and 7 days.