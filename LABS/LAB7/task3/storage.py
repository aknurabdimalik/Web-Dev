import json
from models import Dog, Cat, Snake
def save_data(animals):
    print("Сохраняем:", animals)
    
    try:
        data = [
            {
                "type": type(a).__name__,
                "name": a.name,
                "age": a.age,
                "extra": a.__dict__
            }
            for a in animals
        ]

        print("Данные:", data) 

        with open("data.json", "w") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

    except TypeError:
        print("Ошибка при сохранении данных!")
        
def load_data():
    animals = []

    try:
        with open("data.json", "r") as f:
            data = json.load(f)

            for item in data:
                t = item["type"]
                info = item["extra"]

                if t == "Dog":
                    animal = Dog(info["name"], info["age"], info["breed"])

                elif t == "Cat":
                    animal = Cat(info["name"], info["age"], info["indoor"])

                elif t == "Snake":
                    animal = Snake(info["name"], info["age"], info["breed"])

                animals.append(animal)

    except FileNotFoundError:
        print("Файл не найден, создаем новый список")

    except ValueError:
        print("Ошибка чтения JSON!")

    finally:
        print("Загрузка завершена")

    return animals