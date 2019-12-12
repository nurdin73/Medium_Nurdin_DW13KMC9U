import React, { Component } from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Tooltip,
  Divider
} from "@material-ui/core";
import Links from "@material-ui/core/Link";
import "../App.css";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, BookmarkBorder } from "@material-ui/icons";
class RelatedArticle extends Component {
  render() {
    const related = [
      {
        image: "https://source.unsplash.com/random",
        title: "How to Tell a Woman Is into You Without Asking",
        author: "John Doe",
        initial: "J",
        dateCreated: "Dec 7 | 4 min read",
        like: "2K"
      },
      {
        image: "https://placeimg.com/640/480/any",
        title: "Lorem Ipsum is simply dummy text of the printing",
        author: "Julia",
        initial: "J",
        dateCreated: "Nov 3 | 14 min read",
        like: "1,3K"
      },
      {
        image: "https://picsum.photos/1000/1000",
        title: "Contrary to popular belief, Lorem Ipsum is not ",
        author: "Franks",
        initial: "F",
        dateCreated: "Feb 12 | 10 min read",
        like: "3K"
      }
    ];
    return (
      <div style={{ marginTop: 70 }}>
        <Container>
          <Grid container spacing={4}>
            {related.map(relatedPost => (
              <Grid item xs={12} md={4}>
                <Link to="/article" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="textSecondary"
                  >
                    More from P.S. I Love You
                  </Typography>
                  <div
                    className="related-img"
                    style={{ backgroundImage: `url(${relatedPost.image})` }}
                  ></div>
                  <Typography
                    variant="h5"
                    component="p"
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#000",
                      marginBottom: 20
                    }}
                  >
                    {relatedPost.title}
                  </Typography>
                </Link>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Avatar style={{ marginRight: 10 }}>
                      {relatedPost.initial}
                    </Avatar>
                    <div>
                      <Link
                        to="/profile"
                        style={{
                          fontFamily: "Roboto Condensed",
                          color: "#000",
                          textDecoration: "none",
                          fontSize: 16
                        }}
                      >
                        {relatedPost.author}
                      </Link>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {relatedPost.dateCreated}
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Tooltip title="Like">
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <Typography
                          variant="subtitle1s"
                          component="p"
                          color="textSecondary"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: 10
                          }}
                        >
                          <FavoriteBorderOutlined /> {relatedPost.like}
                        </Typography>
                      </Link>
                    </Tooltip>
                    <Tooltip title="Bookmark">
                      <Link to="/bookmark">
                        <Typography
                          variant="subtitle1s"
                          component="p"
                          color="textSecondary"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <BookmarkBorder />
                        </Typography>
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "50px 0",
            marginTop: "30px"
          }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Link to="/discover" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      fontFamily: "Bitter",
                      color: "#fff",
                      marginBottom: "15px"
                    }}
                  >
                    Discover Medium
                  </Typography>
                </Link>
                <Typography
                  component="p"
                  variant="body2"
                  style={{
                    color: "#fff",
                    fontFamily: "Open Sans",
                    textAlign: "justify"
                  }}
                >
                  Welcome to a place where words matter. On Medium, smart voices
                  and original ideas take center stage - with no ads in sight.
                  Watch
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link to="/discover" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      fontFamily: "Bitter",
                      color: "#fff",
                      marginBottom: "15px"
                    }}
                  >
                    Make Medium yours
                  </Typography>
                </Link>
                <Typography
                  component="p"
                  variant="body2"
                  style={{
                    color: "#fff",
                    fontFamily: "Open Sans",
                    textAlign: "justify"
                  }}
                >
                  Follow all the topics you care about, and we’ll deliver the
                  best stories for you to your homepage and inbox. Explore
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link to="/discover" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      fontFamily: "Bitter",
                      color: "#fff",
                      marginBottom: "15px"
                    }}
                  >
                    Become a member
                  </Typography>
                </Link>
                <Typography
                  component="p"
                  variant="body2"
                  style={{
                    color: "#fff",
                    fontFamily: "Open Sans",
                    textAlign: "justify"
                  }}
                >
                  Get unlimited access to the best stories on Medium — and
                  support writers while you’re at it. Just $5/month. Upgrade
                </Typography>
              </Grid>
            </Grid>
            <Divider style={{ backgroundColor: "#fff", margin: "30px 0" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Frank Ruhl Libre",
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >
                Medium
              </Typography>
              <div style={{ display: "flex" }}>
                <Links
                  href="/help"
                  style={{ color: "#fff", marginLeft: "40px" }}
                >
                  About
                </Links>
                <Links
                  href="/help"
                  style={{ color: "#fff", marginLeft: "40px" }}
                >
                  Help
                </Links>
                <Links
                  href="/help"
                  style={{ color: "#fff", marginLeft: "40px" }}
                >
                  Legal
                </Links>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default RelatedArticle;
