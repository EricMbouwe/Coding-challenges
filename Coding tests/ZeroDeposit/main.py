#!/usr/bin/python

from datetime import datetime

today = datetime(2020, 5, 2)

with open('./guarantees_end.csv', 'r') as f:
    for line in f.readlines():
        row = line.split(',')
        end_date = datetime.strptime(row[0], '%Y-%m-%d')

        if end_date > today:
            print(line + 'Not ended')
        else:
            print(line + 'Ended')


print('===============================')
print('LEVEL1')
print('===============================')

with open('./guarantees_end.csv', 'r') as f:
    for line in f.readlines():
        row = line.split(',')
        end_date = datetime.strptime(row[0], '%Y-%m-%d')
        days_left = end_date - today
        days_past = today - end_date

        if end_date > today:
            print(line + 'Not ended')
            print(f"days remaining: {days_left}")
        else:
            print(line + 'Ended')
            print(f"days past: {days_past}")


def level2(f1, f2):
    for line in f1.readlines():
        row = line.split(',')
        end_date = datetime.strptime(row[0], '%Y-%m-%d')
        days_left = end_date - today
        days_past = today - end_date

        if end_date > today:
            print(line + 'Not ended')
            print(f"days remaining: {days_left}")
        else:
            print(line + 'Ended')
            print(f"days past: {days_past}")

    for line in f2.readlines():
        row = line.split(',')
        end_date = datetime.strptime(row[0], '%Y-%m-%d')
        days_left = end_date - today
        days_past = today - end_date

        if end_date > today:
            print(line + 'Not ended')
            print(f"days remaining: {days_left}")
        else:
            print(line + 'Ended')
            print(f"days past: {days_past}")




print('===============================')
print('LEVEL2')
print('===============================')

with open('./guarantees_end.csv', 'r') as file1, open('./guarantees_copy.csv', 'r') as file2:
    level2(file1, file2)
     


