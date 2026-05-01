#  Aura Boutique

Loja virtual de bolsas e acessórios de couro, desenvolvida como teste técnico para vaga de Desenvolvedor Front-end.

## Sobre o Projeto

A Aura Boutique é uma aplicação de e-commerce desenvolvida em React com TypeScript, simulando uma loja virtual completa com listagem de produtos, carrinho de compras e fluxo de checkout.

## Tecnologias Utilizadas

React — biblioteca para construção da interface
TypeScript — tipagem estática
React Router DOM — navegação entre páginas (SPA)
Tailwind CSS — estilização utilitária
Lucide React — ícones
shadcn/ui — componentes de UI (Sheet, Dialog, Button, Input, Label)
Vite — bundler e servidor de desenvolvimento


## Estrutura do Projeto

src/
├── components/
│   ├── Layout/
│   │   └── Header.tsx         # Navegação principal com carrinho
│   ├── Home/
│   │   └── Hero.tsx           # Seção hero da home
│   ├── Categories.tsx         # Seção de categorias
│   ├── About.tsx              # Página sobre
│   └── ui/                    # Componentes shadcn/ui
│       ├── Sheet.tsx
│       ├── dialog.tsx
│       ├── button.tsx
│       └── input.tsx
├── Context/
│   ├── CartContext.tsx         # Interface e hook do carrinho
│   └── CartProvider.tsx       # Lógica e estado do carrinho
├── hooks/
│   └── use-toast.ts           # Hook de notificações
├── pages/
│   └── Footer.tsx             # Rodapé
├── service/
│   ├── Products.tsx           # Componente de listagem de produtos
│   ├── CartSheet.tsx          # Sidebar do carrinho
│   ├── CheckoutModal.tsx      # Modal de finalização de compra
│   └── productsService.ts     # Fetch dos produtos do JSON
├── types/
│   └── product.ts             # Interface do produto
├── App.tsx                    # Rotas e estrutura principal
└── main.tsx                   # Entry point com CartProvider

public/
└── data/
    └── products.json          # Dados dos produtos


## Funcionalidades

✅ Listagem de produtos consumida via fetch de arquivo JSON estático
✅ Grid responsivo de produtos (1 → 2 → 3 colunas)
✅ Navegação entre páginas com React Router DOM
✅ Carrinho de compras global via Context API
✅ Sidebar do carrinho com controle de quantidade e remoção de itens
✅ Modal de checkout com formulário de entrega e pagamento
✅ Contador de itens no Header atualizado em tempo real
✅ Página de todos os produtos em /products
✅ Seção de categorias na home
✅ Design responsivo e animações com Tailwind CSS

## Arquitetura de Dados

Os produtos são servidos via arquivo estático em public/data/products.json e consumidos pelo productsService.ts:

// service/productsService.ts

export async function getProducts() {
  const response = await fetch("/data/products.json");
  const data = await response.json();
  return data.products;
}

## Fluxo do Carrinho

Usuário clica em "Adicionar"
        ↓
  addItem() → CartContext atualiza estado
        ↓
  CartSheet abre automaticamente
        ↓
  Usuário clica "Finalizar Compra"
        ↓
  CheckoutModal abre com formulário
        ↓
  Pedido confirmado → carrinho limpo

  


