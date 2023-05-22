
      var companies = [];
      
      async function getEmpresas() {
          const response = await fetch("http://localhost:3001/company");
          const empresas = await response.json();
          companies = empresas;
          updateCompanyTable();
      }
      getEmpresas();

      function showAddModal() {
        var modal = document.getElementById("addModal");
        modal.style.display = "block";
      }

      function hideAddModal() {
        var modal = document.getElementById("addModal");
        modal.style.display = "none";
      }

      function showEditModal(id) {
        var modal = document.getElementById("editModal");
        var company = findCompanyById(id);
        if (company) {
          document.getElementById("editCompanyId").value = company.id;
          document.getElementById("editNameInput").value = company.name;
          document.getElementById("editStreetInput").value = company.street;
          document.getElementById("editNumberInput").value = company.number;
          document.getElementById("editNeighborhoodInput").value = company.neighborhood;
          document.getElementById("editCityInput").value = company.city;
          document.getElementById("editStateInput").value = company.state;
          modal.style.display = "block";
        }
      }

      function hideEditModal() {
        var modal = document.getElementById("editModal");
        modal.style.display = "none";
      }

      function showDeleteModal(id) {
        var modal = document.getElementById("deleteModal");
        var company = findCompanyById(id);
        if (company) {
          document.getElementById("deleteCompanyId").value = company.id;
          modal.style.display = "block";
        }
      }

      function hideDeleteModal() {
        var modal = document.getElementById("deleteModal");
        modal.style.display = "none";
      }

      async function addCompany() {
        var name = document.getElementById("nameInput").value;
        var street = document.getElementById("streetInput").value;
        var number = document.getElementById("numberInput").value;
        var neighborhood = document.getElementById("neighborhoodInput").value;
        var city = document.getElementById("cityInput").value;
        var state = document.getElementById("stateInput").value;
      
        var company = {
          name: name,
          street: street,
          number: number,
          neighborhood: neighborhood,
          city: city,
          state: state
        };
      
        // aqui vai fazer o fetch
        // req post tem um objeto config
            const fetch = {
                name: name,
                street: street,
                number: number,
                neighborhood: neighborhood,
                city: city,
                state: state
              };
            
            const response = await fetch("http://localhost:3001/company", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(fetch)
          });
    
        }
        
        getEmpresas();
        hideAddModal();

      function updateCompany() {
        var id = document.getElementById("editCompanyId").value;
        var name = document.getElementById("editNameInput").value;
        var street = document.getElementById("editStreetInput").value;
        var number = document.getElementById("editNumberInput").value;
        var neighborhood = document.getElementById("editNeighborhoodInput").value;
        var city = document.getElementById("editCityInput").value;
        var state = document.getElementById("editStateInput").value;

        var company = findCompanyById(id);
        if (company) {
          company.name = name;
          company.street = street;
          company.number = number;
          company.neighborhood = neighborhood;
          company.city = city;
          company.state = state;
        }
        
        // aqui vai fazer o fetch
        // req post tem um objeto config

        hideEditModal();
      }

      function deleteCompany() {
        var id = document.getElementById("deleteCompanyId").value;
        // aqui vai fazer o fetch
        // req delete tem um objeto config
      }

      function findCompanyById(id) {
        for (var i = 0; i < companies.length; i++) {
          if (companies[i].id === id) {
            return companies[i];
          }
        }
        return null;
      }

      // Renderiza as empresas na tela
      function updateCompanyTable() {
        var tableBody = document.getElementById("companyTable");
        tableBody.innerHTML = "";

        if (companies.length === 0) {
          document.getElementById("noCompaniesMessage").style.display = "block";
        } else {
          document.getElementById("noCompaniesMessage").style.display = "none";

          for (var i = 0; i < companies.length; i++) {
            var company = companies[i];

            var row = document.createElement("tr");

            var idCell = document.createElement("td");
            idCell.innerText = company.id;
            row.appendChild(idCell);

            var nameCell = document.createElement("td");
            nameCell.innerText = company.name;
            row.appendChild(nameCell);

            var streetCell = document.createElement("td");
            streetCell.innerText = company.street;
            row.appendChild(streetCell);

            var numberCell = document.createElement("td");
            numberCell.innerText = company.number;
            row.appendChild(numberCell);

            var neighborhoodCell = document.createElement("td");
            neighborhoodCell.innerText = company.neighborhood;
            row.appendChild(neighborhoodCell);

            var cityCell = document.createElement("td");
            cityCell.innerText = company.city;
            row.appendChild(cityCell);

            var stateCell = document.createElement("td");
            stateCell.innerText = company.state;
            row.appendChild(stateCell);

            var actionsCell = document.createElement("td");
            var editButton = document.createElement("button");
            editButton.innerText = "Editar";
            editButton.addEventListener("click", function(id) {
              return function() {
                showEditModal(id);
              };
            }(company.id));
            actionsCell.appendChild(editButton);

            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Deletar";
            deleteButton.addEventListener("click", function(id) {
              return function() {
                showDeleteModal(id);
              };
            }(company.id));
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);

            tableBody.appendChild(row);
          }
        }
      }
    