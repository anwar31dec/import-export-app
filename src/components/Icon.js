import React from 'react'

export default function Icon({ width, height, children }) {
    const style = {
        width: width || 24,
        height: height || 24,
        display: 'inline-block',
        fill: '#000',
        color: 'rgba(0, 0, 0, 0.87)',
        userSelect: 'none',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    }

    return (
        <svg viewBox="0 0 24 24" style={style}>
            {children}
        </svg>
    )
}

export const MetadataImportIcon = props => (
    <Icon {...props}>
        <path d="M14.039 8.968l-3.961-3.968h1.968s.991-3.178-2.985-5c6.191.222 6.972 5 6.972 5h1.967l-3.961 3.968zm6.461 5.575l-.342.195v1.717l.342-.195v-1.717zm-.844.481l-.35.199v1.717l.35-.199v-1.717zm.906-10.024l-1.306 1.55 1.62.919-6.859 3.698-8.86-5.138 4.436-2.685c-.234-.5-.626-.989-1.313-1.338l-5.124 2.978-3.156 5.487 2 1.106v5.445l12.25 6.978 9.75-5.551v-11.508l-3.438-1.941zm-16.624 2.688l7.897 4.54-1.192 2.091-7.872-4.605 1.167-2.026zm9.062 13.298l-9-5.126v-3.112l7.377 4.319 1.623-2.845v6.764zm9-3.7l-7 3.985v-8.361l7-3.773v8.149zm-4.907-.802l-.349.199v1.713l.349-.195v-1.717zm.584-.333l-.343.195v1.717l.343-.195v-1.717zm1.395-.794l-.343.195v1.717l.343-.195v-1.717zm-.574.327l-.344.196v1.717l.344-.196v-1.717z" />
    </Icon>
)

export const MetadataExportIcon = props => (
    <Icon {...props}>
        <path d="M13.904 9c-3.514-3.984-.1-7.598-.1-7.598l-1.393-1.389 5.589-.013v5.607l-1.372-1.391c0 .001-3.581.706-2.724 4.784zm5.752 6.024l-.35.199v1.717l.35-.199v-1.717zm.844-.481l-.342.195v1.717l.342-.195v-1.717zm-3.407 1.941l-.349.199v1.713l.349-.195v-1.717zm1.979-1.127l-.343.195v1.717l.343-.195v-1.717zm.949-10.673v2.295l.855.489-6.859 3.698-8.86-5.138 6.374-3.654-1.5-1.406-6.864 3.97-3.167 5.533 2 1.106v5.445l12.25 6.978 9.75-5.551v-11.508l-3.979-2.257zm-16.083 3.004l7.897 4.54-1.193 2.091-7.871-4.605 1.167-2.026zm9.062 13.298l-9-5.126v-3.112l5.632 3.297 1.746 1.022 1.002-1.757.62-1.088v6.764zm9-3.7l-7 3.985v-8.361l7-3.773v8.149zm-4.323-1.135l-.343.195v1.717l.343-.195v-1.717zm.821-.467l-.344.196v1.717l.344-.196v-1.717z" />
    </Icon>
)

export const MetadataDependencyExportIcon = props => (
    <Icon {...props}>
        <path d="M16.949 16.132h2.332c-1.092 1.728-3.605 3.638-6.281 3.852v-8.984h3v-2h-3v-1.103c0-2.39 2-2.619 2-4.897 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 2.297 2 2.487 2 4.897v1.103h-3v2h3v9c-2.639-.18-5.133-2.053-6.281-3.868h2.332l-5.051-3.132v5.912l1.269-1.8c2.702 4.503 6.379 4.305 8.731 6.888 2.352-2.583 6.029-2.385 8.731-6.889l1.269 1.8v-5.911l-5.051 3.132zm-5.949-13.132c0-.551.449-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1z" />
    </Icon>
)

export const DataIcon = props => (
    <Icon {...props}>
        <path d="M6.083 4c1.38 1.612 2.578 3 4.917 3h11v13h-20v-16h4.083zm.917-2h-7v20h24v-17h-13c-1.629 0-2.305-1.058-4-3z" />
    </Icon>
)

export const EventIcon = props => (
    <Icon {...props}>
        <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
    </Icon>
)

export const GMLIcon = props => (
    <Icon {...props}>
        <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z" />
    </Icon>
)

export const ArrowUpIcon = () => (
    <Icon width={20} height={20}>
        <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
    </Icon>
)

export const ArrowDownIcon = () => (
    <Icon width={20} height={20}>
        <path d="M12 24l-8-9h6v-15h4v15h6z" />
    </Icon>
)

export const LogoIcon = props => (
    <Icon {...props}>
        <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
)
