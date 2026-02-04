/* ============================================================================
 * Feed Builder
 * ============================================================================
 * Composes heterogeneous content into a unified, ordered feed.
 */

import type { Block } from "../content-models/block";
import type { Post } from "../content-models/post";
import type { Project, ProjectEntry } from "../content-models/project";

/* --------------------------------------------------------------------------
 * Feed item types
 * -------------------------------------------------------------------------- */

export interface BaseFeedItem {
    id: string;
    type: "post" | "project-entry";
    createdAt: string;
    blocks: Block[];
}

export interface PostFeedItem extends BaseFeedItem {
    type: "post";
    slug: string;
}

export interface ProjectEntryFeedItem extends BaseFeedItem {
    type: "project-entry";
    projectSlug: string;
    entryId: string;
}

/* --------------------------------------------------------------------------
 * Feed builder
 * -------------------------------------------------------------------------- */

export function buildFeed(
    posts: Post[],
    projects: Project[]
): BaseFeedItem[] {
    const postItems: PostFeedItem[] = posts.map((post) => ({
        id: post.id,
        type: "post",
        slug: post.slug,
        createdAt: post.createdAt,
        blocks: post.blocks
    }));

    const projectEntryItems: ProjectEntryFeedItem[] = projects.flatMap(
        (project) =>
            project.entries.map((entry) => ({
                id: `${project.id}:${entry.id}`,
                type: "project-entry",
                projectSlug: project.slug,
                entryId: entry.id,
                createdAt: entry.createdAt,
                blocks: entry.blocks
            }))
    );

    return [...postItems, ...projectEntryItems].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
