import random
import json
from faker import Faker
from faker.providers import BaseProvider

'''
AUTH TABLE
Cid - has to be made explicitly unique
EMAIL
PASSWORD
---> fake.random_int(min=0, max=9999)
'''

fake=Faker()
PreviousCustomers=['C001','C002','C003']
class FoodProvider(BaseProvider):
	def CustomerCode(self):
		CustomerCodes=['C004','C005','C006','C007','C008','C009','C010','C011','C012']
		return random.choice(CustomerCodes)

fake.add_provider(FoodProvider)

#Dumping JSON data in a text file
data={}
#data['Auth']=[]

fo = open("data_in_auth.json","w")
for i in range(0,10):
	Cid='%s'%(fake.CustomerCode())
	while(Cid in PreviousCustomers):
		Cid='%s'%(fake.CustomerCode())
	data['Cid']=Cid
	PreviousCustomers.append(Cid)

	email="'%s'"%(fake.email())
	password="'%s'"%(fake.password())
	#data['Cid']=Cid
	data['email']=email
	data['password']=password
	#data['Auth'].append({'Cid': Cid, 'email': email, 'passowrd': password})
	json_data = json.dumps(data)

	fo.write(json_data)
fo.close();

