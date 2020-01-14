class Datatable {
  /**
   *
   * @param {*} table
   * @param {*} search
   */
  constructor(table, search) {
    this.datatable = document.querySelector(table);
    this.searchField = document.querySelector(search);

    this.datatableHeader = this.datatable.tHead;
    this.datatableBody = document.querySelector(`${table} tbody`);
    this.datatableRows = this.datatableBody.querySelectorAll("tr");
    this.sortOrder = -1;
  }

  /**
   *
   */
  enableFilter() {
    if (!this.searchField) {
      return;
    }

    this.searchField.addEventListener("keyup", e => {
      let value = e.target.value.trim().toLowerCase();

      Array.prototype.map.call(this.datatableRows, row => {
        const columns = [].slice.call(row.children);
        const result = columns.map(column => {
          if (column.innerText.toLowerCase().indexOf(value) === -1) {
            return false;
          }
          return true;
        });

        if (result.indexOf(true) == -1) {
          row.style.display = "none";
          return;
        }

        row.style.display = "";
      });
    });
  }

  /**
   *
   * @param {*} idx
   */
  sort(idx) {
    this.sortOrder = -(+this.sortOrder || -1);

    const rows = Array.prototype.slice.call(this.datatableRows);
    const result = rows.sort((first, second) => {
      return (
        this.sortOrder *
        first.cells[idx].textContent
          .trim()
          .localeCompare(second.cells[idx].textContent.trim())
      );
    });
    result.forEach((element, idx) => {
      this.datatableBody.appendChild(element);
    });
  }

  /**
   *
   */
  enableSort() {
    if (!this.datatableHeader) {
      return;
    }

    Array.prototype.map.call(
      this.datatableHeader.querySelectorAll("tr"),
      header => {
        const columns = [].slice.call(header.children);
        columns.map((column, idx) => {
          column.addEventListener("click", () => {
            this.sort(idx);
          });
        });
      }
    );
  }
}
