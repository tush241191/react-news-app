import {Source} from 'src/feature/news/types'

import Logo from '../assets/images/logo.svg'
import Magnifier from '../assets/images/magnifier.svg'

export const APP_VARIABLES = {
  LOCAL_STORAGE_KEY: '__auth_provider_token__'
}

export const APP_ASSETS = {
  LOGO: Logo,
  MAGNIFIER: Magnifier
}

export const STATIC_NEWS_SOURCES: Source[] = [
  {
    id: 'bbc-news',
    name: 'BBC News'
  },
  {
    id: 'cbc-news',
    name: 'CBC News'
  },
  {
    id: 'cnn',
    name: 'CNN'
  },
  {
    id: 'espn',
    name: 'ESPN'
  },
  {
    id: 'fox-news',
    name: 'Fox News'
  }
]
