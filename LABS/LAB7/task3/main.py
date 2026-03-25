from models import Dog, Cat, Snake
from storage import save_data, load_data

def main():
    animals = load_data()

    while True:
        print("\n1. Add Dog")
        print("2. Add Cat")
        print("3. Show all")
        print("4. Save and exit")

        choice = input("Choice: ")

        try:
            if choice == "1":
                name = input("Имя: ")
                age = int(input("Возраст: "))
                breed = input("Порода: ")

                animals.append(Dog(name, age, breed))

            elif choice == "2":
                name = input("Имя: ")
                age = int(input("Возраст: "))
                indoor = input("Домашняя (True/False): ") == "True"

                animals.append(Cat(name, age, indoor))

            elif choice == "3":
                for a in animals:
                    print(a.info(), "|", a.speak())

            elif choice == "4":
                save_data(animals)
                print("Сохранено!")
                break

            else:
                print("Неверный ввод")

        except ValueError:
            print("Возраст должен быть числом!")

        except TypeError as e:
            print("Ошибка:", e)

        finally:
            print("----")

if __name__ == "__main__":
    main()