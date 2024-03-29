export const MOVE_DIRECTION = {
  none: 'none',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
  left: 'left',
  right: 'right',
  top: 'top',
  topLeft: 'topLeft',
  topRight: 'topRight',
  outside: 'outside',
  inside: 'inside'
}

export const settings = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push'
      },
      onHover: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 0.5
    },
    collisions: {
      enable: true
    },
    move: {
      direction: MOVE_DIRECTION.none,
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 0.5,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.2
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true

}
