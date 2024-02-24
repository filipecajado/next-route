import { useRouter} from 'next/router';
import {Link} from 'next/link';
export default function Post() {

  const router = useRouter()

  console.log(' useRouter:', router);
    return (

        <div>
          
          Pagina de Post {router.query.id}
          
          <Link href="/">
              <a> Ir para a home</a>          
          </Link>
          
        </div>
    )
  }