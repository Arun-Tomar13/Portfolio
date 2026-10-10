export type BlogArticle = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    title:
      "Shipping a Production-Ready Slack Integration: OAuth, Events, Messaging, and Every Error That Will Try to Ruin Your Day",
    description:
      "A practical guide to building a production-ready Slack integration, covering OAuth, permissions, messaging, event subscriptions, disconnect handling, and debugging real-world errors.",
    url: "https://medium.com/@aruntomar1330/shipping-a-production-ready-slack-integration-oauth-events-messaging-and-every-error-that-will-dff2a0778545",
    tags: ["Slack API", "OAuth 2.0", "Web Development", "Webhooks"],
  },
];
