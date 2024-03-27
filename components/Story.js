export default function Story(story) {
    return `
        <div class="story--container">
            <div class="first--line">
                <span class="gray--text">${story.index || ""}.</span>
                <span class="upvote">▲</span>
                <a class="black--text" href="${story.url}">${story.title}</a>
                <a class="gray--text hover" href="http://${story.domain}">${story.domain}</a>
            </div>
            <div class="second--line">
                <div class="gray--text">
                    ${story.points} points by ${story.user} ${story.time_ago}
                    |
                    <a class="gray--text hover" href="#/item?id=${story.id}">
                    ${story.comments_count} comments
                    </a>
                    |
                    <span class="favorite hover gray--text" data-story='${JSON.stringify(story)}'>
                        ${story.isFavorite ? "💔Remove From Favorites" : "💗Add To Favorites"}
                    </span>
                </div>
            </div>
        </div>
    `;
}
