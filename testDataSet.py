import random
import json
from faker import Faker
from faker.providers import BaseProvider

'''
USER_HISTORY TABLE
Cid - C001 to C003
order_id - same as below
date
time 

SEPARATE DATE AND TIME COLUMNS IN BOTH TABLES

ORDERS TABLE
order_id - 001 to 012 right now but is 6 characters long
---> fake.random_int(min=0, max=9999)
order_date - date()
order_time - time()
qty - random_digit_not_null() 
price - 
food_id - localisation F001...

'''
fake=Faker()

class FoodProvider(BaseProvider):
	def foodCode(self):
		foodCodes=['F001','F002','F003','F004','F005']
		return random.choice(foodCodes)

	def CustomerCode(self):
		CustomerCodes=['C001','C002','C003']
		return random.choice(CustomerCodes)

fake.add_provider(FoodProvider)
# print(fake.foodCode())
# print(fake.CustomerCode())
for i in range(0,5):
	print(fake.CustomerCode()) #cid
	print(fake.random_int(min=1, max=12)) #orderID
	#
	print(fake.date()) #orderDate
	print(fake.time()) #orderTime
	print(fake.random_digit_not_null()) #qty
	print(fake.random_int(min=7, max=15)) #price
	print(fake.foodCode()) #foodID
	print("--------------------------------------------")


#Dumping JSON data in a text file
data={}
data['Cid']=fake.CustomerCode()
data['order_id']=fake.random_int(min=1, max=12)
#orderDate=fake.date()
#orderTime=fake.time()
data['date']=fake.date()
data['time']=fake.time()
data['qty']=fake.random_digit_not_null()
data['price']=fake.random_int(min=7, max=15)
data['food_id']=fake.foodCode()

json_data = json.dumps(data)
fo = open("data_in_json.json","wb")
fo.write(json_data)
fo.close();

'''


data = {}
data['name'] = 'Chetna'
json_data = json.dumps(data)
fo = open("data_in_json.json","wb")
fo.write(json_data)
fo.close();
'''
