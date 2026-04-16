from .models import Product, Category

def load_data():
   
    categories = {
        "Smartphones": Category.objects.get_or_create(name="Smartphones")[0],
        "Furniture": Category.objects.get_or_create(name="Furniture")[0],
        "Laptops": Category.objects.get_or_create(name="Laptops")[0],
        "Home appliances": Category.objects.get_or_create(name="Home appliances")[0],
    }

    products = [
        {
            "name": "Apple iPhone 14 Pro 128GB",
            "description": "Смартфон Apple iPhone 14 Pro 128Gb серебристый",
            "price": 499000,
            "rating": 5,
            "image": "https://basket-09.wbbasket.ru/vol1247/part124724/124724823/images/big/1.webp",
            "link": "https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-serebristyi-106363274/",
            "category": "Smartphones"
        },
        {
            "name": "Распашной шкаф",
            "description": "Fourdoor, 160x200х47 см, белый",
            "price": 84998,
            "rating": 4,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg",
            "link": "https://l.kaspi.kz/shop/8JookpZUvLkX9YA",
            "category": "Furniture"
        },
        {
            "name": "Samsung Galaxy S24 FE",
            "description": "Galaxy S24 FE 5G 8/128",
            "price": 265000,
            "rating": 4,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png",
            "link": "https://l.kaspi.kz/shop/5hVAHBvhp1A9TRq",
            "category": "Smartphones"
        },
        {
            "name": "iPhone Air 256Gb",
            "description": "Apple iPhone Air",
            "price": 576000,
            "rating": 5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/p9d/p21/64170900.png",
            "link": "https://l.kaspi.kz/shop/2ccfUmNaFJgBtYc",
            "category": "Smartphones"
        },
        {
            "name": "iPhone 16 Pro",
            "description": "Dual eSim золотистый",
            "price": 680000,
            "rating": 5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/h9e/h8a/87310437154846.jpg",
            "link": "https://l.kaspi.kz/shop/HiNbSMxXC8xedWP",
            "category": "Smartphones"
        },
        {
            "name": "iPhone 15",
            "description": "черный",
            "price": 455000,
            "rating": 4.5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg",
            "link": "https://l.kaspi.kz/shop/EeELjgBiGHRXtXM",
            "category": "Smartphones"
        },
        {
            "name": "iPhone 15 Pro Max",
            "description": "белый",
            "price": 750000,
            "rating": 5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/h20/ha9/86596771610654.jpg",
            "link": "https://l.kaspi.kz/shop/GUyWbd2wB3JzWQu",
            "category": "Smartphones"
        },
        {
            "name": "iPhone 15 Pro",
            "description": "512GB",
            "price": 1200000,
            "rating": 5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg",
            "link": "https://l.kaspi.kz/shop/9hLMUYJR1iGSaR9",
            "category": "Smartphones"
        },
        {
            "name": "ASUS Zenbook",
            "description": "14 OLED",
            "price": 700000,
            "rating": 5,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/pae/p6b/25986296.jpg",
            "link": "https://l.kaspi.kz/shop/HbECwFThTktRH7s",
            "category": "Laptops"
        },
        {
            "name": "Робот-пылесос",
            "description": "DREAME X40",
            "price": 400000,
            "rating": 4,
            "image": "https://resources.cdn-kaspi.kz/img/m/p/p88/p55/56757212.jpg",
            "link": "https://l.kaspi.kz/shop/BmrMLfssR16FTRW",
            "category": "Home appliances"
        },
    ]

    for p in products:
        Product.objects.create(
            name=p["name"],
            description=p["description"],
            price=p["price"],
            rating=p["rating"],
            image=p["image"],
            link=p["link"],
            count=10,
            is_active=True,
            category=categories[p["category"]],
        )