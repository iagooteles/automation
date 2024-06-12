import time
import pandas as pd
import pyautogui

url = 'https://dlp.hashtagtreinamentos.com/python/intensivao/login'
email = 'test@gmail.com'
senha = 'testesenha'

position = {
    "x1": 844,
    "y1": 409,
    "x2": 841,
    "y2": 299
}
# position = ["x"="844", "y"="409"]

# Abrir o sistema da empresa
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
time.sleep(2)
pyautogui.write(url)
pyautogui.press("enter")

time.sleep(2)
pyautogui.click(x=position["x1"], y=position["y1"])
pyautogui.write(email)
pyautogui.press("tab")
pyautogui.write(senha)
pyautogui.press("tab")
pyautogui.press("enter")

time.sleep(2)

tabela = pd.read_csv('data/produtos.csv')

for linha in tabela.index:
    codigo = str(tabela.loc[linha, "codigo"])
    marca = str(tabela.loc[linha, "marca"])
    tipo = str(tabela.loc[linha, "tipo"])
    categoria = str(tabela.loc[linha, "categoria"])
    preco_unitario = str(tabela.loc[linha, "preco_unitario"])
    custo = str(tabela.loc[linha, "custo"])
    obs = str(tabela.loc[linha, "obs"])

    pyautogui.click(x=position["x2"], y=position["y2"])
    pyautogui.write(codigo)
    pyautogui.press("tab")
    pyautogui.write(marca)
    pyautogui.press("tab")
    pyautogui.write(tipo)
    pyautogui.press("tab")
    pyautogui.write(categoria)
    pyautogui.press("tab")
    pyautogui.write(preco_unitario)
    pyautogui.press("tab")
    pyautogui.write(custo)
    pyautogui.press("tab")
    pyautogui.write(obs)
    pyautogui.press("tab")
    pyautogui.press("enter")
    pyautogui.scroll(10000)






# abrir/importar a base de dados de produtos para cadastrar

# cadastrar um produto

# repetir até acabar a lista de produtos

