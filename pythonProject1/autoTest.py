import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_google_search():
    driver = webdriver.Chrome()
    driver.get("https://rozetka.com.ua")

    search_box = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//input"))
    )
    search_box.send_keys("Пістолет")

    search_result = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//div[contains(@class,'search')]/ul/li[1]"))
    )
    search_result.click()
    time.sleep(5)
