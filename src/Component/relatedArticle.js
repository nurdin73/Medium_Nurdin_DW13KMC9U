import React, { Component } from 'react';
import { Container, Grid, Typography, Avatar, Tooltip } from '@material-ui/core';
import Links from '@material-ui/core/Link'
import '../App.css'
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, BookmarkBorder } from '@material-ui/icons';
class RelatedArticle extends Component {
  render() {
		const related = [
			{
				image: 'https://source.unsplash.com/random',
				title: 'How to Tell a Woman Is into You Without Asking',
				author: 'John Doe',
				initial: 'J',
				dateCreated: 'Dec 7 | 4 min read',
				like: '2K'
			},
			{
				image: 'https://placeimg.com/640/480/any',
				title: 'Lorem Ipsum is simply dummy text of the printing',
				author: 'Julia',
				initial: 'J',
				dateCreated: 'Nov 3 | 14 min read',
				like: '1,3K'
			},
			{
				image: 'https://picsum.photos/1000/1000',
				title: 'Contrary to popular belief, Lorem Ipsum is not ',
				author: 'Franks',
				initial: 'F',
				dateCreated: 'Feb 12 | 10 min read',
				like: '3K'
			},
		]
    return (
      <div style={{marginTop:70}}>
        <Container>
          <Grid container spacing={4}>
						{related.map((relatedPost) => (
							<Grid item xs={12} md={4}>
								<Link to="/article" style={{textDecoration:"none"}}>
									<Typography variant="subtitle2" component="p" color="textSecondary">
										More from P.S. I Love You
									</Typography>
									<div className="related-img" style={{backgroundImage:`url(${relatedPost.image})`}}></div>
									<Typography variant="h5" component="p" style={{fontFamily:"Noto Serif", color:"#000", marginBottom:20}}>
										{relatedPost.title}
									</Typography>
								</Link>
								<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
									<div style={{ display: "flex" }}>
										<Avatar style={{ marginRight: 10 }}>{relatedPost.initial}</Avatar>
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
									<div style={{display:"flex", alignItems:"center"}}>
										<Tooltip title="Like">
											<Link to="#" style={{textDecoration:"none"}}>
												<Typography variant="subtitle1s" component="p" color="textSecondary" style={{display:"flex", alignItems:"center", marginRight:10}}>
													<FavoriteBorderOutlined /> {relatedPost.like}
												</Typography>
											</Link>
										</Tooltip>
										<Tooltip title="Bookmark">
											<Link to="/bookmark">
												<Typography variant="subtitle1s" component="p" color="textSecondary" style={{display:"flex", alignItems:"center"}}>
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
      </div>
    );
  }
}

export default RelatedArticle;