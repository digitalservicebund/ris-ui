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
  component: Tree,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
                  },
                  {
                    key: "0-0-1",
                    label: "Grandchild 2",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-2",
                    children: [
                      {
                        key: "0-0-1-0",
                        label: "Great Grandchild",
                        route: "/great-grandchild",
                      },
                    ],
                  },
                  {
                    key: "0-0-1-1",
                    label: "Grandchild 3",
                    secondaryLabel: "Secondary Text",
                    children: [
                      {
                        key: "0-0-1-2",
                        label: "Great Grandchild 2",
                        route: "/great-grandchild-2",
                      },
                    ],
                  },
                ],
              },
              {
                key: "0-1",
                label: "Child 2",
                secondaryLabel: "Secondary Text",
                route: "/child-2",
                children: [
                  {
                    key: "0-1-0",
                    label: "Grandchild 4",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-4",
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
                    label: "Grandchild 5",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-5",
                    children: [
                      {
                        key: "0-2-0-0",
                        label: "Great Grandchild 3",
                        route: "/great-grandchild-3",
                      },
                      {
                        key: "0-2-0-1",
                        label: "Great Grandchild 4",
                        route: "/great-grandchild-4",
                      },
                    ],
                  },
                  {
                    key: "0-2-1",
                    label: "Grandchild 6",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-6",
                    children: [
                      {
                        key: "0-2-1-0",
                        label: "Great Grandchild 5",
                        route: "/great-grandchild-5",
                      },
                      {
                        key: "0-2-1-1",
                        label: "Great Grandchild 6",
                        route: "/great-grandchild-6",
                      },
                    ],
                  },
                  {
                    key: "0-2-2",
                    label: "Grandchild 7",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-7",
                    children: [
                      {
                        key: "0-2-2-0",
                        label: "Great Grandchild 7",
                        route: "/great-grandchild-7",
                      },
                      {
                        key: "0-2-2-1",
                        label: "Great Grandchild 8",
                        route: "/great-grandchild-8",
                      },
                    ],
                  },
                ],
              },
              {
                key: "0-3",
                label: "Child 4",
                secondaryLabel: "Secondary Text",
                children: [
                  {
                    key: "0-3-0",
                    label: "Grandchild 8",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-8",
                    children: [
                      {
                        key: "0-3-0-0",
                        label: "Great Grandchild 9",
                        route: "/great-grandchild-9",
                      },
                      {
                        key: "0-3-0-1",
                        label: "Great Grandchild 10",
                        route: "/great-grandchild-10",
                      },
                    ],
                  },
                  {
                    key: "0-3-1",
                    label: "Grandchild 9",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-9",
                    children: [
                      {
                        key: "0-3-1-0",
                        label: "Great Grandchild 11",
                        route: "/great-grandchild-11",
                      },
                      {
                        key: "0-3-1-1",
                        label: "Great Grandchild 12",
                        route: "/great-grandchild-12",
                      },
                    ],
                  },
                  {
                    key: "0-3-2",
                    label: "Grandchild 10",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-10",
                    children: [
                      {
                        key: "0-3-2-0",
                        label: "Great Grandchild 13",
                        route: "/great-grandchild-13",
                      },
                      {
                        key: "0-3-2-1",
                        label: "Great Grandchild 14",
                        route: "/great-grandchild-14",
                      },
                    ],
                  },
                ],
              },
              {
                key: "0-4",
                label: "Child 5",
                secondaryLabel: "Secondary Text",
                children: [
                  {
                    key: "0-4-0",
                    label: "Grandchild 11",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-11",
                    children: [
                      {
                        key: "0-4-0-0",
                        label: "Great Grandchild 15",
                        route: "/great-grandchild-15",
                      },
                      {
                        key: "0-4-0-1",
                        label: "Great Grandchild 16",
                        route: "/great-grandchild-16",
                      },
                    ],
                  },
                  {
                    key: "0-4-1",
                    label: "Grandchild 12",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-12",
                    children: [
                      {
                        key: "0-4-1-0",
                        label: "Great Grandchild 17",
                        route: "/great-grandchild-17",
                      },
                      {
                        key: "0-4-1-1",
                        label: "Great Grandchild 18",
                        route: "/great-grandchild-18",
                      },
                    ],
                  },
                  {
                    key: "0-4-2",
                    label: "Grandchild 13",
                    secondaryLabel: "Secondary Text",
                    route: "/grandchild-13",
                    children: [
                      {
                        key: "0-4-2-0",
                        label: "Great Grandchild 19",
                        route: "/great-grandchild-19",
                      },
                      {
                        key: "0-4-2-1",
                        label: "Great Grandchild 20",
                        route: "/great-grandchild-20",
                      },
                    ],
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
            <span class="ris-label2-regular" @click="toggleNode(node)"
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
