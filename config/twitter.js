import Immutable, {Map, List} from 'Immutable'
import Twitter from 'twit'
import Config from './config'

let twitter = new Twitter(Config)

export default twitter