import {
  IconBoxMultiple, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: IconTable,
    href: "/ui-components/sale",
  },
  {
    id: uniqueId(),
    title: "Formulario",
    icon: IconTable,
    href: "/ui-components/formulario",
  },
  {
    id: uniqueId(),
    title: "Productos",
    icon: IconTable,
    href: "/ui-components/products",
  }
];

export default Menuitems;
