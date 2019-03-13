import { Component, OnInit } from "@angular/core";

@Component({
  selector: "habr-container",
  template: `
    <list [source]="source" [(selectedItems)]="selectedUsers">
      <div
        *list-item="let i; let isSelected = selected"
        class="container"
        [class.item-selected]="isSelected"
      >
        <div class="header">{{ i.name }}</div>
      </div>
    </list>
  `,
  styles: []
})
export class ContainerComponent {
  source: (offset: number, pageSize: number) => any[];

  selectedUsers: any[];

  constructor() {
    this.selectedUsers = this._data.slice(1, 2);
    this.source = (o, p) => this._data.slice(o, o + p);
  }

  _data = [
    {
      id: 1,
      name: "Stephanie",
      lastName: "Owens",
      email: "sowens0@cmu.edu",
      gender: "Female"
    },
    {
      id: 2,
      name: "Stephen",
      lastName: "Torres",
      email: "storres1@cbc.ca",
      gender: "Male"
    },
    {
      id: 3,
      name: "Lillian",
      lastName: "West",
      email: "lwest2@jalbum.net",
      gender: "Female"
    },
    {
      id: 4,
      name: "Larry",
      lastName: "Hill",
      email: "lhill3@phpbb.com",
      gender: "Male"
    },
    {
      id: 5,
      name: "Patrick",
      lastName: "Duncan",
      email: "pduncan4@prlog.org",
      gender: "Male"
    },
    {
      id: 6,
      name: "Steven",
      lastName: "Nguyen",
      email: "snguyen5@meetup.com",
      gender: "Male"
    },
    {
      id: 7,
      name: "Eugene",
      lastName: "Garrett",
      email: "egarrett6@psu.edu",
      gender: "Male"
    },
    {
      id: 8,
      name: "Juan",
      lastName: "Wood",
      email: "jwood7@elpais.com",
      gender: "Male"
    },
    {
      id: 9,
      name: "Harold",
      lastName: "Little",
      email: "hlittle8@walmart.com",
      gender: "Male"
    },
    {
      id: 10,
      name: "Linda",
      lastName: "Cunningham",
      email: "lcunningham9@storify.com",
      gender: "Female"
    },
    {
      id: 11,
      name: "Mary",
      lastName: "Clark",
      email: "mclarka@jalbum.net",
      gender: "Female"
    },
    {
      id: 12,
      name: "Larry",
      lastName: "Barnes",
      email: "lbarnesb@usda.gov",
      gender: "Male"
    },
    {
      id: 13,
      name: "Kathy",
      lastName: "Kelley",
      email: "kkelleyc@delicious.com",
      gender: "Female"
    },
    {
      id: 14,
      name: "Johnny",
      lastName: "Morris",
      email: "jmorrisd@github.com",
      gender: "Male"
    },
    {
      id: 15,
      name: "Louis",
      lastName: "Sanchez",
      email: "lsancheze@usda.gov",
      gender: "Male"
    },
    {
      id: 16,
      name: "Arthur",
      lastName: "Carter",
      email: "acarterf@merriam-webster.com",
      gender: "Male"
    },
    {
      id: 17,
      name: "Mildred",
      lastName: "Cole",
      email: "mcoleg@deviantart.com",
      gender: "Female"
    },
    {
      id: 18,
      name: "Philip",
      lastName: "Harvey",
      email: "pharveyh@arstechnica.com",
      gender: "Male"
    },
    {
      id: 19,
      name: "Christine",
      lastName: "Morales",
      email: "cmoralesi@hibu.com",
      gender: "Female"
    },
    {
      id: 20,
      name: "Martha",
      lastName: "Ford",
      email: "mfordj@forbes.com",
      gender: "Female"
    },
    {
      id: 21,
      name: "Alice",
      lastName: "Mccoy",
      email: "amccoyk@google.cn",
      gender: "Female"
    },
    {
      id: 22,
      name: "Raymond",
      lastName: "Chapman",
      email: "rchapmanl@indiegogo.com",
      gender: "Male"
    },
    {
      id: 23,
      name: "Kathleen",
      lastName: "Butler",
      email: "kbutlerm@canalblog.com",
      gender: "Female"
    },
    {
      id: 24,
      name: "Diane",
      lastName: "Baker",
      email: "dbakern@unc.edu",
      gender: "Female"
    },
    {
      id: 25,
      name: "Ruth",
      lastName: "Hill",
      email: "rhillo@icq.com",
      gender: "Female"
    },
    {
      id: 26,
      name: "Margaret",
      lastName: "Johnson",
      email: "mjohnsonp@guardian.co.uk",
      gender: "Female"
    },
    {
      id: 27,
      name: "Virginia",
      lastName: "Carpenter",
      email: "vcarpenterq@altervista.org",
      gender: "Female"
    },
    {
      id: 28,
      name: "Lillian",
      lastName: "Mitchell",
      email: "lmitchellr@youtu.be",
      gender: "Female"
    },
    {
      id: 29,
      name: "Julie",
      lastName: "Patterson",
      email: "jpattersons@example.com",
      gender: "Female"
    },
    {
      id: 30,
      name: "Joyce",
      lastName: "Garcia",
      email: "jgarciat@who.int",
      gender: "Female"
    },
    {
      id: 31,
      name: "Charles",
      lastName: "Gray",
      email: "cgrayu@smugmug.com",
      gender: "Male"
    },
    {
      id: 32,
      name: "Anthony",
      lastName: "Carr",
      email: "acarrv@nih.gov",
      gender: "Male"
    },
    {
      id: 33,
      name: "Antonio",
      lastName: "Hernandez",
      email: "ahernandezw@fda.gov",
      gender: "Male"
    },
    {
      id: 34,
      name: "Nancy",
      lastName: "Campbell",
      email: "ncampbellx@canalblog.com",
      gender: "Female"
    },
    {
      id: 35,
      name: "Amanda",
      lastName: "Wood",
      email: "awoody@phoca.cz",
      gender: "Female"
    },
    {
      id: 36,
      name: "Gloria",
      lastName: "Johnson",
      email: "gjohnsonz@diigo.com",
      gender: "Female"
    },
    {
      id: 37,
      name: "Jacqueline",
      lastName: "Webb",
      email: "jwebb10@prnewswire.com",
      gender: "Female"
    },
    {
      id: 38,
      name: "Ralph",
      lastName: "Meyer",
      email: "rmeyer11@economist.com",
      gender: "Male"
    },
    {
      id: 39,
      name: "Fred",
      lastName: "Foster",
      email: "ffoster12@youku.com",
      gender: "Male"
    },
    {
      id: 40,
      name: "Carolyn",
      lastName: "Daniels",
      email: "cdaniels13@google.pl",
      gender: "Female"
    },
    {
      id: 41,
      name: "Jessica",
      lastName: "Butler",
      email: "jbutler14@bluehost.com",
      gender: "Female"
    },
    {
      id: 42,
      name: "Eugene",
      lastName: "Perez",
      email: "eperez15@theglobeandmail.com",
      gender: "Male"
    },
    {
      id: 43,
      name: "Brian",
      lastName: "Walker",
      email: "bwalker16@elegantthemes.com",
      gender: "Male"
    },
    {
      id: 44,
      name: "Walter",
      lastName: "Holmes",
      email: "wholmes17@hatena.ne.jp",
      gender: "Male"
    },
    {
      id: 45,
      name: "Alice",
      lastName: "Smith",
      email: "asmith18@wikimedia.org",
      gender: "Female"
    },
    {
      id: 46,
      name: "Antonio",
      lastName: "Myers",
      email: "amyers19@omniture.com",
      gender: "Male"
    },
    {
      id: 47,
      name: "Joan",
      lastName: "Banks",
      email: "jbanks1a@trellian.com",
      gender: "Female"
    },
    {
      id: 48,
      name: "Gary",
      lastName: "Lee",
      email: "glee1b@ed.gov",
      gender: "Male"
    }
  ];
}
