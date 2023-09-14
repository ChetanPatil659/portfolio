import NavSide from "./navside"

const Nav = () => {
    return (
        <div className="text-gray-200 h-28 w-full flex items-center justify-between px-5 lg:px-32">
            <div><h2 className="font-medium text-sm lg:text-base text-gray-100">
                    Chetan Patil
                </h2>
            </div>
            <NavSide />
        </div>
    )
}

export default Nav