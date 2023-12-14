import type { Meta, StoryObj } from "@storybook/react";
import {
  MockOAuth2ProviderApps,
  MockOAuth2ProviderAppSecrets,
  mockApiError,
} from "testHelpers/entities";
import { EditOAuth2AppPageView } from "./EditOAuth2AppPageView";

const meta: Meta = {
  title: "pages/DeploySettingsPage/EditOAuth2AppPageView",
  component: EditOAuth2AppPageView,
};
export default meta;

type Story = StoryObj<typeof EditOAuth2AppPageView>;

export const LoadingApp: Story = {
  args: {
    isLoadingApp: true,
  },
};

export const LoadingSecrets: Story = {
  args: {
    app: MockOAuth2ProviderApps[0],
    isLoadingSecrets: true,
  },
};

export const Error: Story = {
  args: {
    app: MockOAuth2ProviderApps[0],
    secrets: MockOAuth2ProviderAppSecrets,
    error: mockApiError({
      message: "Validation failed",
      validations: [
        {
          field: "name",
          detail: "name error",
        },
        {
          field: "callback_url",
          detail: "url error",
        },
        {
          field: "icon",
          detail: "icon error",
        },
      ],
    }),
  },
};

export const Default: Story = {
  args: {
    app: MockOAuth2ProviderApps[0],
    secrets: MockOAuth2ProviderAppSecrets,
  },
};