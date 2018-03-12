import random
import json
from faker import Faker
from faker.providers import BaseProvider

'''
Customer_profile TABLE
Cid - C001 to C003
F_name - first_name()
L_name - last_name()
Age - fake.random_int(min=15, max=60)
Address - address()
Email - email()
Password - password()
mobile_no - phone_number
user_category - fake.CustomerCategory()
freq - #no. of orders in a month
total - total no. of orders-count the order_id array size in user_history

'''

fake=Faker()

class FoodProvider(BaseProvider):
	def CustomerCode(self):
		CustomerCodes=['C004','C005','C006','C007','C008','C009','C010','C011','C012']
		return random.choice(CustomerCodes)

	def CustomerCategory(self):
		CustomerCategories=['frequent','new','occasional']
		return random.choice(CustomerCategories)

fake.add_provider(FoodProvider)

#importing credentials from auth table
input_file=open('data_in_auth.json','r')
json_decode=json.load(input_file)


#Dumping JSON data in a text file
result=[]
data={}
#data['Customer_profile']=[]
#data2 = json.load(open('data_in_auth.json'))
fo = open("data_in_custProfile.json","w")
for item in json_decode:
	my_dict={}
	my_dict['Email']=item.get('email')
	my_dict['Cid']=item.get('Cid')
	my_dict['Password']=item.get('password')
	#result.append(my_dict)
#for i in range(0,5):
	#Cid="'%s'"%(fake.CustomerCode())
	my_dict['F_name']="'%s'"%(fake.first_name())
	my_dict['L_name']="'%s'"%(fake.last_name())
	my_dict['Age']="'%s'"%(fake.random_int(min=13, max=67))
	my_dict['Address']="'%s'"%(fake.address())
	#email="'%s'"%(fake.email())
	#password="'%s'"%(fake.password())
	my_dict['mobile_no']="'%s'"%(fake.phone_number())
	my_dict['user_category']="'%s'"%(fake.CustomerCategory())
	#result.append({'F_name': first_name, 'L_name': last_name, 'Age': age, 'Address': address, 'mobile_no': mobile_no, 'user_category': user_category})
#data2.update(data)
	result.append(my_dict)
json_data = json.dumps(result)

fo.write(json_data)
fo.close();
