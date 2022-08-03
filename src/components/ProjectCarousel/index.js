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
      isRightActive: true,
      isLeftActive: false,
    };
  }

  handleArrowState() {
    const cardWidth = $(".carouselCard")[0].offsetWidth;
    const cardMargin = 40;
    const carouselWidth =
      (cardWidth + cardMargin) * (this.state.carouselItems - 1);
    const carousel = this.carousel.current;

    const handleScrollOffset = () => {
      if (carousel.scrollLeft === 0) {
        this.setState({
          isLeftActive: false,
        });
      } else {
        this.setState({
          isLeftActive: true,
        });
      }

      if (carousel.scrollLeft >= carouselWidth) {
        this.setState({
          isRightActive: false,
        });
      } else {
        this.setState({
          isRightActive: true,
        });
      }
    };

    clearTimeout(window.scrollFinished);
    window.scrollFinished = setTimeout(() => {
      handleScrollOffset();
    }, 10);
  }

  handleClickScroll(scrollOffset) {
    let count;
    const currentItem = this.state.carouselCurrentItem;
    const total = this.state.carouselItems;

    count = scrollOffset > 0 ? currentItem + 1 : currentItem - 1;
    if (count > total) {
      count = total;
    } else if (count < 1) {
      count = 1;
    }

    this.carousel.current.scrollBy(scrollOffset, 0);
    this.setState({
      carouselCurrentItem: count,
    });
  }

  componentDidMount() {
    $("#Carousel").on("scroll", () => {
      this.handleArrowState();
    });

    $("#Carousel").on("resize", () => {
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
                marginRight: "40px",
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
      </div>
    );
  }
}

export default ProjectCarousel;
