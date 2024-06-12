import time
import pandas as pd
import pyautogui

url = 'http://localhost:3000/'
email = 'test@gmail.com'
senha = 'testesenha'
tabela = pd.read_csv('data/produtos3c.csv', encoding='utf-8')

position = {
    "x1": 798,
    "y1": 450,
    "x2": 820,
    "y2": 400
}

pyautogui.press("win")
time.sleep(1)
pyautogui.write("chrome")
pyautogui.press("enter")
time.sleep(1)
pyautogui.write(url)
pyautogui.press("enter")

time.sleep(1)
pyautogui.click(x=position["x1"], y=position["y1"])
pyautogui.write(email)
pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.write(senha)
pyautogui.press("tab")
pyautogui.press("enter")

time.sleep(1)
for linha in tabela.index:
    codigo = str(tabela.loc[linha, "codigo"])
    marca = str(tabela.loc[linha, "marca"])
    tipo = str(tabela.loc[linha, "tipo"])
    categoria = str(tabela.loc[linha, "categoria"])
    preco_unitario = str(tabela.loc[linha, "preco_unitario"])
    custo = str(tabela.loc[linha, "custo"])
    obs = str(tabela.loc[linha, "obs"])

    # print(marca)
    # print(tipo)

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
