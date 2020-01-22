import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  cards = [
    {
      title: "Post 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#"
    },
    {
      title: "Post 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#"
    },
    {
      title: "Post 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
