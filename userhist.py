import random
import json
from faker import Faker
from random import randint
from faker.providers import BaseProvider

'''
USER_HISTORY TABLE
Cid - C001 to C003
order_id - 001 to 012 right now but is 6 characters long
---> fake.random_int(min=0, max=9999)


'''
fake=Faker()

class FoodProvider(BaseProvider):
	def CustomerCode(self):
		CustomerCodes=['C004','C005','C006','C007','C008','C009','C010','C011','C012']
		return random.choice(CustomerCodes)

fake.add_provider(FoodProvider)
PreviousOrders=[1,2,3,4,5,6,7,8,9,10,11,12]
PreviousCustomers=['C001','C002','C003']
def common_member(a, b):
     
    a_set = set(a)
    b_set = set(b)
     
    # check length 
    if len(a_set.intersection(b_set)) > 0:
        return(list(a_set.intersection(b_set)))  
    else:
        return(-1)

#Dumping JSON data in a text file
data={'Cid': [], 'order_id': []}

#data['user_history']=[]
#data['user_history']['order_id']=[[]]
'''
data = {}

data['Cid']=Cid
'''

fo = open("data_in_userHistory.json","w")
for i in range(0,7):
	NoOfOrders=randint(1, 9)
	Cid='%s'%(fake.CustomerCode())
	while(Cid in PreviousCustomers):
		Cid='%s'%(fake.CustomerCode())
	data['Cid']=Cid
	PreviousCustomers.append(Cid)

	#for j in range(0,NoOfOrders):
	order_id=random.sample(range(1,100),NoOfOrders)
	#print(order_id)

	common=common_member(PreviousOrders,order_id)
	if(common!=-1):
		for item in common:
			order_id.remove(item)
	#print(common)
	#print(order_id)
	#print("--------------------------")
	data['order_id']=order_id
	for item in order_id:
		PreviousOrders.append(item)
	json_data = json.dumps(data)

	fo.write(json_data)
fo.close();
