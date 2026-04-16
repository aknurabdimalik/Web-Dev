import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [ProductListComponent],
})
export class App {
  selectedCategory: string = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro 128GB',
      description: 'Смартфон Apple iPhone 14 Pro 128Gb серебристый',
      price: 499000,
      rating: 5,
      image: 'https://basket-09.wbbasket.ru/vol1247/part124724/124724823/images/big/1.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/hc1/64503553949726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/hd5/64503556571166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h50/64503557652510.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-serebristyi-106363274/?srsltid=AfmBOormazCjrMVTL6Brnn9SJlvoRexuq3B_-feRCII-UERXb57UhSdC',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 2,
      name: 'Распашной шкаф',
      description: 'Fourdoor, 160x200х47 см, белый',
      price: 84998,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h46/67189057552414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h22/67189058076702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/hb1/85996739199006.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/8JookpZUvLkX9YA',
      category: 'Furniture',
      likes: 0
    },
    {
      id: 3,
      name: 'Смартфон Samsung Galaxy S24 FE 5G',
      description: 'Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
      price: 265000,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p76/1610320.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p7a/1610310.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/5hVAHBvhp1A9TRq',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 4,
      name: 'iPhone Air 256Gb',
      description: 'Смартфон Apple iPhone Air 256Gb белый',
      price: 576000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p21/64170900.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/p21/64170900.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pab/p0f/64477542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p21/64170902.png?format=gallery-medium',
      ],
      link:'https://l.kaspi.kz/shop/2ccfUmNaFJgBtYc',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 16 Pro 128Gb',
      description: 'Dual eSim золотистый',
      price: 680000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8a/87310437154846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h49/87310437220382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/he3/87310437285918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h48/87310437351454.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/HiNbSMxXC8xedWP',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 6,
      name: 'iPhone 15 256Gb',
      description: 'Смартфон Apple iPhone 15 черный',
      price: 455000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h44/he4/83559338672158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0b/83559328448542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/hca/83559328514078.jpg?format=gallery-large'
      ],
      link: 'https://l.kaspi.kz/shop/EeELjgBiGHRXtXM',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 7,
      name: 'iPhone 15 Pro Max 256Gb',
      description: 'Dual eSim белый',
      price:750000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/ha9/86596771610654.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hdb/86596771676190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h32/86596771872798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/h09/86596771807262.jpg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/GUyWbd2wB3JzWQu',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 8,
      name: 'iPhone 15 Pro',
      description: 'Максимальная версия iPhone 14 Pro с 512ГБ памяти',
      price: 1200000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/86319883485214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/h16/86319883583518.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/9hLMUYJR1iGSaR9',
      category: 'Smartphones',
      likes: 0
    },
    {
      id: 9,
      name: 'Ноутбук ASUS Zenbook 14 OLED',
      description: '14" / 16 Гб / SSD 1000 Гб / Win 11',
      price: 700000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p6b/25986296.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p6b/25986297.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p6b/25986298.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p21/25986301.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/HbECwFThTktRH7s',
      category: 'Laptops',
      likes: 0
    },
    {
      id: 10,
      name: 'Робот-пылесос DREAME X40',
      description: 'Робот-пылесос белый',
      price: 400000,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p55/56757212.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p55/56757214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p14/p56/56757217.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p58/56757222.jpg?format=gallery-medium',
      ],
      link: 'https://l.kaspi.kz/shop/BmrMLfssR16FTRW',
      category: 'Home appliances',
      likes: 0
    },

    {
      id:11,
      name:'Распашной шкаф',
      description:'Al-Badi, 160x230х52.2 см, белый',
      price:88000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p57/p03/16927148.jpeg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p03/16927148.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p10/16927149.png?format=gallery-medium',
      ],
      link:'https://l.kaspi.kz/shop/3XFcUCLWYCXq4az',
      category:'Furniture',
      likes:0
    },
    {
      id:12,
      name:'Угловой диван',
      description:'Угловой диван Nilstone 326 , 320х140 см, обивка микровелюр, серый',
      price:240000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86323381829662.jpg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86323381829662.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/ha7/86323381895198.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/h1e/86323381960734.png?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/2rCJNcFdUCaob9E',
      category:'Furniture',
      likes:0
    },
    {
      id:13,
      name:'Ноутбук Apple MacBook',
      description:'Ноутбук Apple MacBook Air 15 2025 / 16 Гб / SSD 512 Гб / macOS / MW1M3RU/A',
      price:870000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p3e/p3c/36913132.png?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/p3c/36913132.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/p3c/36913133.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p3c/36913134.png?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/2TPbTs937FeeWCP',
      category:'Laptops',
      likes:0
    },

    {
      id:14,
      name:'Ноутбук ASUS',
      description:'Ноутбук ASUS VivoBook S16 S3607VA-RP096 16" / 16 Гб / SSD 512 Гб / Без ОС / 90NB1671-M007N0',
      price:350000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p86/p4f/58198619.jpg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p4f/58198619.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p51/58198620.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p52/58198621.jpg?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/BewF9XMc1ZutQDV',
      category:'Laptops',
      likes:0
    },
    {
      id:15,
      name:'Пылесос',
      description:'Пылесос TROUVER K20 Flex Reach черный',
      price:130000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p73/pc5/108409993.jpg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p73/pc5/108409993.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/pf9/60843294.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/pf9/60843296.jpg?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/2vi2TfZfKveTyyu',
      category:'Home appliances',
      likes:0
    },

    {
      id:16,
      name:'Холодильник',
      description:'Холодильник Samsung RB37A5200EL бежевый',
      price:330000,
      rating:4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hfa/h8a/64069887983646.jpg?format=gallery-medium',
      images:[ 
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h8a/64069887983646.jpg?format=gallery-medium',
       'https://resources.cdn-kaspi.kz/img/m/p/ha6/hd8/64069879267358.jpg?format=gallery-medium',
       'https://resources.cdn-kaspi.kz/img/m/p/h37/h33/64069884837918.jpg?format=gallery-medium',
      ],
      link:'https://l.kaspi.kz/shop/2RCeiwvmQoDBRpt',
      category:'Home appliances',
      likes:0
    },
    {
      id:17,
      name:'Яндекс центр',
      description:'Яндекс центр управления YNDX-00510',
      price:20000,
      rating:4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h97/ha0/85044989427742.jpg?format=gallery-medium',
      images:[ 
        'https://resources.cdn-kaspi.kz/img/m/p/h97/ha0/85044989427742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h36/85044989493278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h0e/85044989558814.png?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/HHE4cKagH2BJbNE',
      category:'Home appliances',
      likes:0
    },

    {
      id:18,
      name:'Ноутбук Acer',
      description:'Ноутбук Acer Nitro V 15 ANV15-41 15.6" / 16 Гб / SSD 512 Гб / Без ОС / NH.QSGER.001',
      price:525000,
      rating:4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p5a/p4d/106398866.JPG?format=gallery-medium',
      images:[ 
        'https://resources.cdn-kaspi.kz/img/m/p/p5a/p4d/106398866.JPG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p99/p4a/106398870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h1a/86519255793694.jpg?format=gallery-medium'
      ],
      link:'https://l.kaspi.kz/shop/4Zyc8RZfSFHToqp',
      category:'Laptops',
      likes:0
    },
    {
      id:19,
      name:'Кофемашина',
      description:'Кофемашина HOKURA CM5520 черный',
      price:95000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p67/p9c/75983700.png?format=gallery-medium',
      images:[ 
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p9c/75983700.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4b/p9c/75983701.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p9c/75983702.png?format=gallery-medium',
      ],
      link:'https://kaspi.kz/shop/p/kofemashina-hokura-cm5520-chernyi-148648774/?c=750000000',
      category:'Home appliances',
      likes:0
    },
    {
      id:20,
      name:'Стол консоль-трансформер',
      description:'Стол консоль-трансформер Gloria, 300х100x76 см, ЛДСП, МДФ, белый',
      price:75000,
      rating:4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p58/p03/30386887.jpeg?format=gallery-medium',
      images:[ 
       'https://resources.cdn-kaspi.kz/img/m/p/p58/p03/30386887.jpeg?format=gallery-medium',
       'https://resources.cdn-kaspi.kz/img/m/p/pc2/p06/30386888.jpeg?format=gallery-medium',
       'https://resources.cdn-kaspi.kz/img/m/p/p2c/p0a/30386889.jpeg?format=gallery-medium',
      ],
      link:'https://kaspi.kz/shop/p/stol-konsol--transformer-glorija-300h100x76-sm-ldsp-mdf-belyi-136385336/?c=750000000',
      category:'Furniture',
      likes:0
    }
  ];
}