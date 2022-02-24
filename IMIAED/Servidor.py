from flask import Flask

app=Flask(__name__)

@app.route("/app/v1/usuarios/<id>",methods=["GET","POST"])
def users_action(id):
    return id


app.run()