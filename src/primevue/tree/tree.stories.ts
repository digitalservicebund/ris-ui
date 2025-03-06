import { Meta, StoryObj } from "@storybook/vue3";
import Tree from "primevue/tree";
import { html } from "@/lib/tags.ts";
import { ref, onMounted } from "vue";
import ChevronDownIcon from "~icons/mdi/chevron-down";
import ChevronUpIcon from "~icons/mdi/chevron-up";
import PrimevueButton from "primevue/button";
import { vueRouter } from "storybook-vue3-router";

interface TreeNode {
  key: string;
  label: string;
  route?: string;
  secondaryLabel?: string;
  children?: TreeNode[];
}

const meta: Meta<typeof Tree> = {
  // @ts-expect-error Component type broken
  component: Tree,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TableOfContents: Story = {
  render: (args) => ({
    components: { Tree, ChevronDownIcon, ChevronUpIcon, PrimevueButton },
    setup() {
      const nodes = ref<TreeNode[]>([]);
      const expandedKeys = ref<Record<string, boolean>>({});
      const isExpanded = ref<boolean>(false);
      const selectionKeys = ref<Record<string, boolean>>({});

      onMounted(() => {
        nodes.value = [
          {
            key: "0",
            label: "Primary Text",
            secondaryLabel: "Secondary Text",
            route: "/",
            children: [
              {
                key: "0-0",
                label: "Child 1",
                secondaryLabel: "Secondary Text",
                children: [
                  {
                    key: "0-0-0",
                    label: "Grandchild 1",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-1",
                    children: [
                      {
                        key: "0-0-0-0",
                        label: "Great Grandchild 1",
                        route: "/great-grandchild-1",
                      },
                      {
                        key: "0-0-0-1",
                        label: "Great Grandchild 2",
                        route: "/great-grandchild-2",
                      },
                      {
                        key: "0-0-0-2",
                        label: "Great Grandchild 3",
                        route: "/great-grandchild-3",
                      },
                    ],
                  },
                  {
                    key: "0-0-1",
                    label: "Grandchild 2",
                    secondaryLabel: "Secondary Text",
                    children: [
                      {
                        key: "0-0-1-0",
                        label: "Great Grandchild 4",
                        route: "/great-grandchild-4",
                      },
                    ],
                  },
                ],
              },
              {
                key: "0-1",
                label: "Child 2",
                route: "/child-2",
                children: [
                  {
                    key: "0-1-0",
                    label: "Grandchild 3",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-3",
                  },
                ],
              },
              {
                key: "0-2",
                label: "Child 3",
                secondaryLabel: "Secondary Text",
                children: [
                  {
                    key: "0-2-0",
                    label: "Grandchild 4",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-4",
                    children: [
                      {
                        key: "0-2-0-0",
                        label: "Great Grandchild 5",
                        route: "/great-grandchild-5",
                      },
                      {
                        key: "0-2-0-1",
                        label: "Great Grandchild 6",
                        route: "/great-grandchild-6",
                      },
                    ],
                  },
                  {
                    key: "0-2-1",
                    label: "Grandchild 5",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-5",
                    children: [
                      {
                        key: "0-2-1-0",
                        label: "Great Grandchild 7",
                        route: "/great-grandchild-7",
                      },
                      {
                        key: "0-2-1-1",
                        label: "Great Grandchild 8",
                        route: "/great-grandchild-8",
                      },
                    ],
                  },
                  {
                    key: "0-2-2",
                    label: "Grandchild 6",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-6",
                    children: [
                      {
                        key: "0-2-2-0",
                        label: "Great Grandchild 9",
                        route: "/great-grandchild-9",
                      },
                      {
                        key: "0-2-2-1",
                        label: "Great Grandchild 10",
                        route: "/great-grandchild-10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: "1",
            label: "Secondary Text",
            secondaryLabel: "Another Secondary Text",
            route: "/secondary",
            children: [
              {
                key: "1-0",
                label: "Child 1",
                secondaryLabel: "Another Secondary Text",
                route: "/child-1",
                children: [
                  {
                    key: "1-0-0",
                    label: "Grandchild 1",
                    secondaryLabel: "Another Secondary Text",
                    route: "/grandchild-1",
                  },
                ],
              },
              {
                key: "1-1",
                label: "Child 2",
                secondaryLabel: "Another Secondary Text",
                route: "/child-2",
                children: [
                  {
                    key: "1-1-0",
                    label: "Grandchild 2",
                    secondaryLabel: "Another Secondary Text",
                    route: "/grandchild-2",
                  },
                ],
              },
              {
                key: "1-2",
                label: "Child 3",
                secondaryLabel: "Another Secondary Text",
                route: "/child-3",
                children: [
                  {
                    key: "1-2-0",
                    label: "Grandchild 3",
                    secondaryLabel: "Another Secondary Text",
                    route: "/grandchild-3",
                  },
                ],
              },
            ],
          },
        ];
      });

      // Toggle expansion on click
      const toggleNode = (node: TreeNode) => {
        if (expandedKeys.value[node.key]) {
          delete expandedKeys.value[node.key];
        } else {
          expandedKeys.value[node.key] = true;
        }
        expandedKeys.value = { ...expandedKeys.value };
      };

      // Expand all nodes
      const expandAll = () => {
        const expandNode = (node: TreeNode) => {
          expandedKeys.value[node.key] = true;
          if (node.children) {
            node.children.forEach(expandNode);
          }
        };

        nodes.value.forEach(expandNode);
        expandedKeys.value = { ...expandedKeys.value };
      };

      // Collapse all nodes
      const collapseAll = () => {
        expandedKeys.value = {};
      };

      // Toggle expand/collapse for all nodes
      const toggleExpandCollapse = () => {
        if (isExpanded.value) {
          collapseAll();
        } else {
          expandAll();
        }
        isExpanded.value = !isExpanded.value;
      };

      return {
        args,
        nodes,
        expandedKeys,
        selectionKeys,
        isExpanded,
        toggleExpandCollapse,
        toggleNode,
      };
    },
    template: html`
      <div class="card w-full">
        <div
          class="mb-6 flex w-full cursor-pointer items-center justify-between gap-2"
          @click="toggleExpandCollapse"
        >
          <span>Inhaltsverzeichnis</span>
          <PrimevueButton text label="Alle Ebenen öffnen" v-if="!isExpanded">
            <template #icon>
              <ChevronDownIcon />
            </template>
          </PrimevueButton>

          <PrimevueButton text label="Alle Ebenen schließen" v-else>
            <template #icon>
              <ChevronUpIcon />
            </template>
          </PrimevueButton>
        </div>
        <Tree
          v-model:expandedKeys="expandedKeys"
          v-model:selectionKeys="selectionKeys"
          :value="nodes"
          selectionMode="single"
        >
          <template #default="{ node, selected, expanded }">
            <router-link
              v-if="node.route"
              :to="node.route"
              @click="toggleNode(node)"
            >
              {{ node.label }}
            </router-link>
            <span v-else class="w-full" @click="toggleNode(node)"
              >{{ node.label }}</span
            >
            <span
              v-if="node.secondaryLabel"
              class="ris-label2-regular"
              @click="toggleNode(node)"
              >{{ node.secondaryLabel }}</span
            >
          </template>
          <template #nodetoggleicon="{ expanded }">
            <ChevronDownIcon v-if="!expanded" />
            <ChevronUpIcon v-else />
          </template>
        </Tree>
      </div>
    `,
  }),
  decorators: [
    vueRouter(), // This will add basic router functionality to your story
  ],
};
