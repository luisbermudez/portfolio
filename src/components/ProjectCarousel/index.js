import "./ProjectCarousel.css";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import $ from "jquery";
import SecondaryButton from "../SecondaryButton";
import { projectsInfo } from "../../utils/content";
import { Link } from "react-router-dom";

class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.projects = projectsInfo;
    this.state = {
      carouselItems: this.projects.length,
      carouselCurrentItem: 1,
      areArrowsActive: true,
      isRightActive: true,
      isLeftActive: false,
    };
  }

  handleArrowState() {
    const cardWidth = $(".carouselCard")[0].offsetWidth;
    const carouselViewport = $("#Carousel")[0].offsetWidth;
    const cardMargin = 40;
    const carousel = this.carousel.current;
    const totalItemsWidth =
      cardWidth * this.state.carouselItems +
      cardMargin * (this.state.carouselItems - 1);
    const maxScrollRight = totalItemsWidth - carouselViewport;

    if (carouselViewport >= totalItemsWidth) {
      this.setState({
        isLeftActive: false,
        isRightActive: false,
        areArrowsActive: false,
      });
      return;
    } else {
      this.setState({
        areArrowsActive: true,
      });
    }

    if (carousel.scrollLeft === 0) {
      this.setState({
        isLeftActive: false,
      });
    } else {
      this.setState({
        isLeftActive: true,
      });
    }

    if (carousel.scrollLeft >= maxScrollRight) {
      this.setState({
        isRightActive: false,
      });
    } else {
      this.setState({
        isRightActive: true,
      });
    }
  }

  handleClickScroll(scrollOffset) {
    this.carousel.current.scrollBy(scrollOffset, 0);
  }

  componentDidMount() {
    this.handleArrowState();

    $("#Carousel").on("scroll", () => {
      clearTimeout(window.scrolledFinished);
      window.scrolledFinished = setTimeout(() => {
        this.handleArrowState();
      }, 50);
    });

    $(window).on("resize", () => {
      clearTimeout(window.resizeFinished);
      window.resizeFinished = setTimeout(() => {
        this.handleArrowState();
      }, 50);
    });
  }

  render() {
    return (
      <div id="ProjectCarousel">
        <Box
          sx={{
            scrollBehavior: "smooth",
            display: "flex",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            "::-webkit-scrollbar": { display: "none" },
          }}
          ref={this.carousel}
          id="Carousel"
        >
          {this.projects.map((each, index) => (
            <Card
              key={index}
              sx={{
                width: "100%",
                scrollSnapAlign: "start",
                flexShrink: "0",
                boxShadow: "none",
              }}
              className="carouselCard"
            >
              <img alt={each.projectTitle} src={each.projectImage} />
              <div>
                <h4 className="titleFour gradientTitleSecondary">
                  {each.projectType}
                </h4>
                <h3 className="titleThree">{each.projectTitle}</h3>
                <Link
                  to={`/project/${each.nameLink}`}
                  onClick={() => {
                    $("html, body").scrollTop(0);
                  }}
                >
                  <SecondaryButton text="View Project" />
                </Link>
              </div>
            </Card>
          ))}
        </Box>
        {this.state.areArrowsActive && (
          <div className="arrowsCarousel">
            {this.state.isLeftActive ? (
              <ArrowBackIosNewRoundedIcon
                onClick={() => this.handleClickScroll(-20)}
              />
            ) : (
              <ArrowBackIosNewRoundedIcon className="disabledArrow" />
            )}
            {this.state.isRightActive ? (
              <ArrowForwardIosRoundedIcon
                onClick={() => this.handleClickScroll(20)}
              />
            ) : (
              <ArrowForwardIosRoundedIcon className="disabledArrow" />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ProjectCarousel;
