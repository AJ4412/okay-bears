/**
 * !====================================
 * Code for tost & bgMusic start
 * !====================================
 */

// Toast
const galleryToast = document.getElementById('galleryToast');
const galleryToastBtn = document.getElementById('galleryToastBtn');
galleryToastBtn.addEventListener('click', e => {
  e.preventDefault();
  galleryToast.classList.toggle('d-none');
  setTimeout(() => {
    galleryToast.classList.toggle('d-none');
  }, 2000);
});

// bg Music
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bgMusic')) {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play();
    bgMusic.mute = false;
    bgMusic.volume = 0.5;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('touchstart', function () {
    if (document.getElementById('bgMusic')) {
      const bgMusic = document.getElementById('bgMusic');
      bgMusic.play();
      bgMusic.mute = false;
      bgMusic.volume = 0.5;
    }
  });
});

/**
 * !====================================
 * Code for tost & bgMusic End
 * !====================================
 */

/**
 * !====================================
 * Code for Music player start
 *  plusSign = <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
 *  minusSign = <path d="M0 10h24v4h-24z"></path>
 *  soundPauseIcon = <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
 *  soundPlayIcon = <path d="M7 6v12l10-6z"></path>
 * !====================================
 */
jQuery(function () {
  const musicOne = 'assets-global.website-files.com/622eead55797fc2865c24818/bg-music.mpeg';
  const musicTwo = 'assets-global.website-files.com/622eead55797fc2865c24818/manifesto.mpeg';
  const minusSign = 'M0 10h24v4h-24z';
  const playSign = 'M3 22v-20l18 10-18 10z';
  const plusSign = 'M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z';
  const soundPauseIcon = 'M8 7h3v10H8zm5 0h3v10h-3z';
  const soundPlayIcon = 'M7 6v12l10-6z';
  const btnOpener = document.getElementById('btnOpener');
  // const mainOpener = document.getElementById('mainOpener');
  const playIcon = document.getElementById('playIcon');
  const mainSoundBody = document.getElementById('mainSoundBody');
  const audio = document.getElementById('audio');
  const soundPause = document.getElementById('soundPause');
  let soundPauseBtn = document.getElementById('soundPauseIcon');
  let signPath = document.getElementById('signPath');
  const prevTrack = document.getElementById('prevTrack');
  const nextTrack = document.getElementById('nextTrack');

  if (prevTrack && nextTrack) {
    const changeTrack = () => {
      if (audio.getAttribute('src') === musicOne) {
        audio.setAttribute('src', musicTwo);
        audio.play();
      } else {
        audio.setAttribute('src', musicOne);
        audio.play();
      }
    }
    prevTrack.addEventListener('click', () => {
      changeTrack();
    });

    nextTrack.addEventListener('click', () => {
      changeTrack();
    })
  }

  if (btnOpener && soundPause) {
    btnOpener.addEventListener('click', opener);
    soundPause.addEventListener('click', player);
  }

  function player() {
    if (soundPauseBtn.getAttribute('d') === soundPauseIcon) {
      soundPauseBtn.setAttribute('d', soundPlayIcon);
      playIcon.classList.remove('playingicon');
      audio.pause();
    } else {
      soundPauseBtn.setAttribute('d', soundPauseIcon);
      playIcon.classList.add('playingicon');
      audio.play();
    }
  }

  function opener() {
    if (signPath.getAttribute('d') === playSign) {
      signPath.setAttribute('d', minusSign);
      playIcon.classList.add('playingicon');
      mainSoundBody.classList.remove('closed');
      soundPauseBtn.setAttribute('d', soundPauseIcon);
      audio.play();
    } else if (signPath.getAttribute('d') === minusSign) {
      signPath.setAttribute('d', plusSign)
      mainSoundBody.classList.add('closed');
    } else if (signPath.getAttribute('d') === plusSign) {
      signPath.setAttribute('d', minusSign);
      mainSoundBody.classList.remove('closed');
    } else {
      return;
    }
  }

});

/**
 * !====================================
 * Code for Music player End
 * !====================================
 */
