from django.shortcuts import render
import mysql.connector as sql
fn=''
moodle=''
g=''
email=''
pwd=''

# Create your views here.
def signaction(request):
    global fn, moodle, g, email, pwd
    if request.method=="POST":
        m=sql.connect(host="localhost", user="root", passwd="1234", database="aceit")
        cursor=m.cursor()
        d= request.POST 
        for key, value in d.items():
            if key=="full_name":
                fn=value
            if key=="moodle":
                moodle=value
            if key=="gender":
                g=value
            if key=="email":
                email=value
            if key=="password":
                pwd=value

        c="insert into users values('{}','{}','{}','{}','{}')".format(fn, moodle, g, email, pwd)
        cursor.execute(c)
        m.commit()
    return render(request, 'signup_page.html')