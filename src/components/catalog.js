export class Catalog {

    constructor(root, options) {
        this.root = root
        this.renderItem = options.renderItem
        this.getItems = options.getItems

        this.limit = 9
        this.page = 1

        this.itemsContainer = root.querySelector('[data-catalog-items]')
        this.paginationContainer = root.querySelector('[data-catalog-pagination]')
    }

    async init() {
        await this.loadItems()
    }

    async loadItems() {

        const data = await this.getItems({
            limit: this.limit,
            page: this.page
        })

        this.renderItems(data.items)
        this.renderPagination(data.total)
    }

    renderItems(items) {

        this.itemsContainer.innerHTML =
            items.map(this.renderItem).join('')
    }

    renderPagination(total) {

        const pages = Math.ceil(total / this.limit)

        this.paginationContainer.innerHTML = ''

        for (let i = 1; i <= pages; i++) {

            const btn = document.createElement('button')

            btn.textContent = i
            btn.className = 'catalog__pagination-item'

            if (i === this.page) {
                btn.classList.add('catalog__pagination-item_active')
            }

            btn.addEventListener('click', async () => {

                this.page = i

                await this.loadItems()
            })

            this.paginationContainer.append(btn)
        }
    }
}