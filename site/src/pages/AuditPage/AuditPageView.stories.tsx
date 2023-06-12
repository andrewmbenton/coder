/* eslint-disable eslint-comments/disable-enable-pair -- ignore */
/* eslint-disable @typescript-eslint/no-explicit-any -- We don't care about any here */
import { Meta, StoryObj } from "@storybook/react"
import { MockAuditLog, MockAuditLog2, MockUser } from "testHelpers/entities"
import { AuditPageView } from "./AuditPageView"
import { action } from "@storybook/addon-actions"
import { WorkspacesPageView } from "pages/WorkspacesPage/WorkspacesPageView"
import { ComponentProps } from "react"

const mockMenu = {
  initialOption: undefined,
  isInitializing: false,
  isSearching: false,
  query: "",
  searchOptions: [],
  selectedOption: undefined,
  selectOption: action("selectOption"),
  setQuery: action("updateQuery"),
}

const defaultFilterProps = {
  filter: {
    query: `owner:me`,
    update: () => action("update"),
    debounceUpdate: action("debounce") as any,
    used: false,
    values: {
      username: MockUser.username,
      action: undefined,
      resource_type: undefined,
    },
  },
  menus: {
    user: mockMenu,
    action: mockMenu,
    resourceType: mockMenu,
  },
} as ComponentProps<typeof AuditPageView>["filterProps"]

const meta: Meta<typeof AuditPageView> = {
  title: "pages/AuditPageView",
  component: AuditPageView,
  args: {
    auditLogs: [MockAuditLog, MockAuditLog2],
    count: 1000,
    page: 1,
    limit: 25,
    isAuditLogVisible: true,
    filterProps: defaultFilterProps,
  },
}

export default meta
type Story = StoryObj<typeof WorkspacesPageView>

export const AuditPage: Story = {}

export const Loading = {
  args: {
    auditLogs: undefined,
    count: undefined,
    isNonInitialPage: false,
  },
}

export const EmptyPage = {
  args: {
    auditLogs: [],
    isNonInitialPage: true,
  },
}

export const NoLogs = {
  args: {
    auditLogs: [],
    count: 0,
    isNonInitialPage: false,
  },
}

export const NotVisible = {
  args: {
    isAuditLogVisible: false,
  },
}

export const AuditPageSmallViewport = {
  parameters: {
    chromatic: { viewports: [600] },
  },
}
