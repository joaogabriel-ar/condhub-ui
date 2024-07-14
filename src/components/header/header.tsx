import './header.scss'

export default function Header ({title, subTitle}:any) {

    return (
        <header>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </header>
    )

}