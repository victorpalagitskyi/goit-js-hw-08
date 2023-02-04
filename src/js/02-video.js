import Player from '@vimeo/player';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const key = "videoplayer-current-time"

    player.on('timeupdate', ({seconds})=>localStorage.setItem(key, seconds))
    player.setCurrentTime(localStorage.getItem(key) || 0);
