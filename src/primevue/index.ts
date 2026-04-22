import { deDE } from "@/config/locale";
import breadcrumb from "@/primevue/breadcrumb/breadcrumb";
import autocomplete from "./autocomplete/autocomplete";
import button from "./button/button";
import checkbox from "./checkbox/checkbox";
import chip from "./chip/chip";
import confirmDialog from "./confirmDialog/confirmDialog";
import dataTable from "./dataTable/dataTable";
import dialog from "./dialog/dialog";
import drawer from "./drawer/drawer";
import fileUpload from "./fileUpload/fileUpload";
import inputGroup from "./inputGroup/inputGroup";
import inputMask from "./inputMask/inputMask";
import inputText from "./inputText/inputText";
import menu from "./menu/menu";
import message from "./message/message";
import multiselect from "./multiSelect/multiSelect";
import panelmenu from "./panelMenu/panelMenu";
import password from "./password/password";
import progressSpinner from "./progressSpinner/progressSpinner";
import radioButton from "./radioButton/radioButton";
import select from "./select/select";
import splitter from "./splitter/splitter";
import { tab, tabList, tabPanel } from "./tabs/tabs";
import textarea from "./textarea/textarea";
import toast from "./toast/toast";
import tooltip from "./tooltip/tooltip";
import tree from "./tree/tree";

export const RisUiTheme = {
  autocomplete,
  breadcrumb,
  button,
  checkbox,
  chip,
  confirmDialog,
  dataTable,
  dialog,
  drawer,
  fileUpload,
  inputGroup,
  inputMask,
  inputText,
  menu,
  message,
  multiselect,
  panelmenu,
  password,
  progressSpinner,
  radioButton,
  select,
  splitter,
  tab,
  tabList,
  tabPanel,
  textarea,
  toast,
  tree,

  directives: {
    tooltip,
  },
};

export const RisUiLocale = {
  deDE,
};
