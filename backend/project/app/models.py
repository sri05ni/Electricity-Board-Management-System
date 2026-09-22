from django.db import models

# Create your models here.
class Status(models.Model):
    #possible choices user can select
    Status_choice=[
        ('Connection Released','Connection Released'),
        ('Approved','Approved'),    # (label,value)
        ('Pending','Pending'),
        ('Rejected','Rejected'),
    ]
    Status_Name=models.CharField(max_length=40,choices=Status_choice)
    def __str__(self):
        return self.Status_Name


class Applicant(models.Model):
    Gender_choice=[
        ('Male','Male'),
        ('Female','Female'),
    ]
    Ownership_choice=[
        ('Individual','Individual'),
        ('Joint','Joint'),
    ]
    Govtid_choice=[
        ('Aadhar','Aadhar'),
        ('Voterid','Voterid'),
        ('Pan','Pan'),
        ('Passport','Passport'),
    ]
    Category_choice=[
        ('Residential','Residential'),
        ('Commercial','Commercial'),
    ]

    Applicant_Name=models.CharField(max_length=100)
    Gender=models.CharField(max_length=10,choices=Gender_choice)
    District=models.CharField(max_length=100)
    State=models.CharField(max_length=100)
    Pincode=models.IntegerField()
    Ownership=models.CharField(max_length=20,choices=Ownership_choice)
    GovtID_Type=models.CharField(max_length=20,choices=Govtid_choice)
    ID_Number=models.CharField(max_length=100)
    Category=models.CharField(max_length=20,choices=Category_choice)

    def __str__(self):
        return self.Applicant_Name

#Applicant (tablename)
#Applicant_name,gender.... (column name)


#class database table

class Connection(models.Model):
    Reviewer_comment=[
        ('Installation Pending','Installation Pending'),
        ('Documents verification in progress','Documents verification in progress'),
        ('Installation completed','Installation completed'),
        ('Kyc Failed','Kyc Failed')
    ]

    Applicant=models.ForeignKey(Applicant,on_delete=models.CASCADE)
    Load_Applied=models.IntegerField()
    Date_of_Application=models.DateField()
    Date_of_Approval=models.DateField(null=True,blank=True)
    Modified_Date=models.DateField(null=True,blank=True)
    Status=models.ForeignKey(Status,on_delete=models.CASCADE)
    Reviewer_ID=models.IntegerField()
    Reviewer_Name=models.CharField(max_length=100)
    Reviewer_Comments=models.CharField(max_length=50,choices=Reviewer_comment)

    def __str__(self):
        return f"Connection id:{self.id} - Applicant:{self.Applicant}"