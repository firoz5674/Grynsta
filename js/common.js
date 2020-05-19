
const updateInfoTitle = () => {
    let info = document.getElementById("info-title");
    const subType = document.getElementById("subType").value;
    if (subType === "general") {
        info.title =
            "These are the real living people who are active on Youtube and engage (share, comment, like) on various niches rather than your particular niche."
    } else if (subType === "targeted") {
        info.title =
            "These are real living people who are similar (like minded) to the subscribers your Youtube channel currently has. These are highly engaging on niches similar to your channel"
    } else {
        info.title = "Please select the subscriber type"
    }
}



