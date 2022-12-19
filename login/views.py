from tkinter import messagebox
from django.shortcuts import render
import mysql.connector as sql
moodle=''
pwd=''

# Create your views here.
def loginaction(request):
    global moodle, pwd
    if request.method=="POST":
        m=sql.connect(host="localhost", user="root", passwd="1234", database="aceit")
        cursor=m.cursor()
        d= request.POST 
        for key, value in d.items():
            if key=="moodle":
                moodle=value
            if key=="password":
                pwd=value

        c="select * from users where moodle='{}' and password='{}'".format(moodle, pwd)
        cursor.execute(c)
        t=tuple(cursor.fetchall())
        if t==():
            return render(request, 'login_page.html')
        else:
            return render(request, 'main2index.html')

    return render(request, 'login_page.html')

def index(request):
    return render(request, 'mainindex.html')

def indexes(request):
    return render(request, 'main2index.html')

def blog1(request):
    return render(request, 'blog1.html')
def blog2(request):
    return render(request, 'blog2.html')

def blog3(request):
    return render(request, 'blog3.html')

def blogs(request):
    return render(request, 'blogs.html')

def blogs2page(request):
    return render(request, 'blogs2page.html')

def test(request):
    return render (request, 'testyourself.html')

def dbms(request):
    return render (request, 'dbms.html')

def ds(request):
    return render (request, 'ds.html')

def os(request):
    return render (request, 'os.html')

def amazon(request):
    return render (request, 'igamazon.html')

def google(request):
    return render (request, 'iggoogle.html')

def delloite(request):
    return render (request, 'igdelloite.html')

def guide(request):
    return render (request, 'interview guide.html')

def notes(request):
    return render (request, 'notes.html')

def notes2(request):
    return render (request, 'notes2.html')

def videos(request):
    return render (request, 'videos.html')

def videos2(request):
    return render (request, 'videos2.html')

def osquiz(request):
    return render (request, './Os/osindex.html')

def dsquiz(request):
    return render (request, './Ds/dsindex.html')

def dbmsquiz(request):
    return render (request, './Dbms/dbmsindex.html')

def osans(request):
    return render(request, './Os/osmcqaans.html')

def dsans(request):
    return render(request, './Ds/dsmcqaans.html')

def dbmsans(request):
    return render(request, './Dbms/dbmsmcqaans.html')










